"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type NavigateOptions = {
  scroll?: boolean;
};


export function useQueryParam<T extends object>(userPathname?: string,) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  const setParam = (key: string, value: string, options: NavigateOptions = { scroll: false }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    router.push(`${userPathname || pathname}?${params.toString()}`, {
      scroll: options.scroll ?? false,
    });

    if (!value) removeParam(key);
  };

  const setParams = <K extends keyof T>(newParams: Record<K, T[K]>, options: NavigateOptions = { scroll: false }) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value as string);
      }
    });

    router.push(`${pathname}?${params.toString()}`, {
      scroll: options.scroll ?? false,
    });
  };

  const removeParam = (key: string, options: NavigateOptions = { scroll: false }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, {
      scroll: options.scroll ?? false,
    });
  };

  const resetParams = (options: NavigateOptions = { scroll: false }) => {
    router.push(pathname, {
      scroll: options.scroll ?? false,
    });
  };

  return {
    getParam,
    setParam,
    setParams,
    removeParam,
    resetParams,
    allParams: searchParams,
  };
}
