import { PaginationMeta } from "@/types/pagination-meta.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import { findProperties } from "../api";
import { PropertiesResponse } from "../types/property-response.type";

export function useInfiniteProperties({
  per_page,
  price_max,
  price_min,
  status,
  type,
  location
}: PropertySearchParams) {
  return useInfiniteQuery<{
    data: PropertiesResponse;
    pagination: PaginationMeta;
  }>({
    queryKey: [
      "properties",
      per_page,
      price_max,
      price_min,
      status,
      type,
      location,
    ],

    queryFn: ({ pageParam }) =>
      findProperties({
        per_page,
        price_max,
        price_min,
        status,
        type,
        location,
        cursor: pageParam as string,
      }),

    initialPageParam: null,

    getNextPageParam: (lastPage) => {
      return lastPage.data.next_cursor ?? undefined;
    },

    // UX
    staleTime: 0,
    gcTime: 1000 * 60 * 5,

    refetchOnWindowFocus: false,
    retry: 1,
  });
}