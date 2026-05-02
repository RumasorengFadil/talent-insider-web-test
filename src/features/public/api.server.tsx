import { apiServerFetch } from "@/lib/api.server.fetch";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { PropertiesResponse } from "./types/property-response.type";

export async function findProperties({ per_page, price_max, price_min, status, type, location }: PropertySearchParams) {
    const searchParams = new URLSearchParams();

    if (per_page !== undefined) {
        searchParams.set("per_page", String(per_page));
    }

    if (price_max !== undefined) {
        searchParams.set("price_max", String(price_max));
    }

    if (price_min) {
        searchParams.set("price_min", String(price_min));
    }

    if (status) {
        searchParams.set("status", String(status));
    }

    if (type) {
        searchParams.set("type", String(type));
    }

    if (location) {
        searchParams.set("location", String(location));
    }

    const queryString = searchParams.toString();

    const data = apiServerFetch<{ data: PropertiesResponse, pagination: PaginationMeta }>(queryString ? `/properties?${queryString}` : `/properties`, { next: { revalidate: 43200 } });

    return data;
}
