
export type PropertyResponse = {
  id: string | number
  image_url: string
  name: string
  address: string
  type: string
  status: string
  price: string
  area: string | number
  land_area: string | number
  building_area: string | number,
  duration: string
}

export interface PropertiesResponse {
  data: PropertyResponse[];

  next_cursor: string | null;
  next_page_url: string | null;

  prev_cursor: string | null;
  prev_page_url: string | null;

  path: string;
  per_page: number;
}