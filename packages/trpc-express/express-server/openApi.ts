import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter_ex } from "./router/_app";

export const openApiDocument = generateOpenApiDocument(appRouter_ex, {
  title: "Turbo Cell Open Api Swagger",
  description: "OpenAPI compliant REST API built using tRPC with Express.js",
  version: "1.0.0",
  baseUrl: "http://localhost:2024",
  tags: ["auth", "computers"],
});

export * from "trpc-openapi";
