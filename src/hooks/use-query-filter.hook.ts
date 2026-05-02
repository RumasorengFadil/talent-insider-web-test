import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useQueryParam } from "./use-query-param";

type Primitive = string | number | undefined;

type UseQueryFiltersOptions<T> = {
  defaultValues: T;
  debounceDelay?: number;
};

export function useQueryFilters<T extends object>({
  defaultValues,
  debounceDelay = 300,
}: UseQueryFiltersOptions<T>) {
  const { setParam, setParams } = useQueryParam();
  const searchParams = useSearchParams();

  // ambil semua param dari URL sesuai key defaultValues
  const params = {} as T;

  for (const key in defaultValues) {
    const value = searchParams.get(key);

    if (value === null) {
      params[key] = defaultValues[key];
    } else {
      // auto convert number kalau default number
      if (typeof defaultValues[key] === "number") {
        params[key] = Number(value) as T[typeof key];
      } else {
        params[key] = value as T[typeof key];
      }
    }
  }

  // local state untuk field yg butuh input (biasanya search)
  const [localState, setLocalState] = useState<T>(params);

  // debounce full object (powerful untuk API call)
  const [debouncedParams] = useDebounce(localState, debounceDelay);

  // update param (generic)
  const setFilter = useDebouncedCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setParam(key as string, String(value ?? ""));
    },
    debounceDelay
  );

  const setFilters = useDebouncedCallback(
    <K extends keyof T>(params: Record<K, T[K]>) => {
      setParams(params);
    },
    debounceDelay
  );

  // update local state (tanpa langsung ke URL)
  const setLocal = <K extends keyof T>(key: K, value: T[K]) => {
    setLocalState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // helper khusus search (reset page kalau ada)
  const applySearch = useDebouncedCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setParam(key as string, String(value ?? ""));

      // auto reset page kalau ada
      if ("page" in defaultValues) {
        setParam("page", "1");
      }
    },
    debounceDelay
  );

  return {
    params,            // raw dari URL
    localState,        // state untuk input
    debouncedParams,   // untuk API

    setFilter,         // langsung ke URL
    setLocal,          // update local state
    applySearch,       // untuk search UX
    setFilters,
  };
}