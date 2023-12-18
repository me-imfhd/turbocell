"use client";
import React from "react";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";

export default function Page() {
  return (
    <div className="bg-white">
      <SwaggerUI url="http://localhost:3000/api/openapi.json"></SwaggerUI>
    </div>
  );
}
