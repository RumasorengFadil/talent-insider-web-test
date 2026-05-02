export function extractErrorMessage(error: any): string {
  const msg = error?.response?.data?.error.message;

  if (!msg) return "An unexpected error occurred. Please contact support if the problem persists.";

  if (typeof msg === "string") return msg;

  if (Array.isArray(msg)) return msg.join(", ");

  if (typeof msg === "object") return Object.values(msg).join(", ");

  return "An unexpected error occurred. Please contact support if the problem persists.";
}
