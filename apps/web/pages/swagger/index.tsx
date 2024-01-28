import dynamic from "next/dynamic";
// @ts-ignore
import type { SwaggerUI } from "swagger-ui-react";

const SwaggerUIDynamic: SwaggerUI & { url: string } = dynamic(
  // @ts-ignore
  () => import("swagger-ui-react"),
  {
    ssr: false,
  }
);

const swaggerURI =
  process.env.NEXT_PUBLIC_APP_URL === "https://repo-web.vercel.app"
    ? "https://repo-web.vercel.app/api/openapi"
    : "http://localhost:3000/api/openapi";

export default function APIDocs() {
  return <SwaggerUIDynamic url={swaggerURI} />;
}
