import { env } from "@harborx/auth";
export function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (env.server.NEXT_PUBLIC_APP_URL) return `https://${env.server.NEXT_PUBLIC_APP_URL}`;
  return "http://localhost:3000";
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}
