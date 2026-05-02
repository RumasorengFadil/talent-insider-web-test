import { cookies } from "next/headers";

export async function apiServerFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value ?? "";

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();

    throw new Error(
      `Request failed: ${response.status} - ${errorBody}`
    );
  }

  return await response.json();
}