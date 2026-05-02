import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type FilterConfig<T> = {
  initialValues: T;
  debounce?: Partial<Record<keyof T, number>>;
  onChange: (filters: Record<string, string>) => void;
  runOnMount?: boolean;
};

export function useFilters<T extends Record<string, any>>({
  initialValues,
  debounce = {},
  onChange,
  runOnMount = true, // default: tidak jalan di awal
}: FilterConfig<T>) {
  const [filters, setFilters] = useState<T>(initialValues);

  const latestFilters = useRef(filters);
  latestFilters.current = filters;

  const isFirstRender = useRef(true);

  const debouncedHandlers = Object.keys(initialValues).reduce(
    (acc, key) => {
      const delay = debounce[key as keyof T] ?? 300;

      acc[key] = useDebouncedCallback(() => {
        onChange(
          Object.fromEntries(
            Object.entries(latestFilters.current).map(([k, v]) => [
              k,
              v ? String(v) : "",
            ])
          )
        );
      }, delay);

      return acc;
    },
    {} as Record<string, any>,
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!runOnMount) return;
    }

    Object.keys(filters).forEach((key) => {
      debouncedHandlers[key]?.();
    });
  }, [filters]);

  const setFilter = <K extends keyof T>(
    key: K,
    value: T[K] | ((prev: T[K]) => T[K])
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]:
        typeof value === "function"
          ? (value as any)(prev[key])
          : value,
    }));
  };

  const resetFilter = (value: T | null) => {
    setFilters(value ?? initialValues);

    onChange({});
  };

  return { filters, setFilter, setFilters, resetFilter };
}