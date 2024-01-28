import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "../server/routers/_app";

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Turbo Cell Open Api Swagger",
  description: "OpenAPI compliant REST API built using tRPC with Next.js",
  version: "1.0.0",
  baseUrl:
    process.env.VERCEL_ENV === "production"
      ? "https://repo-web.vercel.app"
      : "http://localhost:3000",
  tags: ["auth", "computers"],
});

export * from "trpc-openapi";
