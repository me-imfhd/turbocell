import { openApiDocument } from "@repo/trpc/openApi";

// Respond with our OpenAPI schema
export async function GET() {
  return new Response(JSON.stringify(openApiDocument));
}
