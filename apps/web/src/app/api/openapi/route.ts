import { openApiDocument } from "@repo/trpc/src/trpc/openapi";

// Respond with our OpenAPI schema
export async function GET() {
  return new Response(JSON.stringify(openApiDocument));
}
