"use client";
import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const swaggerURI =
  process.env.VERCEL_ENV === "production"
    ? "https://turbocell-web.vercel.app/api/openapi"
    : "http://localhost:3000/api/openapi";

export default function Page() {
  return (
    <div className="bg-white text-black">
      This will be the swagger page
      <SwaggerUI url={swaggerURI}></SwaggerUI>
    </div>
  );
}
