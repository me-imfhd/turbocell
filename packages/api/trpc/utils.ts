import { env } from "@harborx/auth";
export function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (env.NEXT_PUBLIC_APP_URL) return `https://${env.NEXT_PUBLIC_APP_URL}`;
  return "http://localhost:3000";
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}
