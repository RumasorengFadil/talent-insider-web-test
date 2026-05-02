export async function apiPublicFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    {
      ...options,
      next: {
        revalidate: 43200,
        ...options.next,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}