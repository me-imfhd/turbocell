/* eslint-disable @typescript-eslint/no-misused-promises */
import cors from "cors";
import express, { Express } from "express";
import swaggerUi from "swagger-ui-express";
import {
  appRouter_ex,
  createContext_ex,
  createOpenApiExpressMiddleware,
  openApiDocument,
} from "@repo/trpc-express";

import session from "express-session";
export const createTRPCServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(cors())
    .use(
      session({
        secret: process.env.EXPRESS_SECRET as string,
        resave: false,
        saveUninitialized: false,
      })
    )
    // Handle incoming tRPC requests
    .use(
      "/api/trpc",
      createOpenApiExpressMiddleware({
        router: appRouter_ex,
        createContext: createContext_ex,
      })
    )
    // Handle incoming OpenAPI requests
    .use(
      "/api",
      createOpenApiExpressMiddleware({
        router: appRouter_ex,
        createContext: createContext_ex,
      })
    )
    .use("/", swaggerUi.serve)
    .get("/", swaggerUi.setup(openApiDocument));
  return app;
};
