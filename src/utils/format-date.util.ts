import { formatDate as formatDateFns } from "date-fns";

export function formatDate({ value, includeTime = false }: { value: string; includeTime?: boolean }) {
  return formatDateFns(value, `dd MMM yyyy ${includeTime ? "HH:mm" : ""}`);
}
