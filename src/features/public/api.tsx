import { api } from "@/lib/api";

//
// COURSES
//
export async function findProperties({ per_page, price_max, price_min, status, type, location, cursor }: PropertySearchParams) {
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

    if (cursor) {
        searchParams.set("cursor", String(cursor));
    }

    const queryString = searchParams.toString();

    const res = await api.get(
        queryString ? `/properties?${queryString}` : `/properties`, {
        withCredentials: false,
    }
    );

    return res.data;
}
// export async function createBlog(data: BlogFormSchemaType) {
//     const res = await api.post("/blogs", data, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     });

//     return res.data;
// }
