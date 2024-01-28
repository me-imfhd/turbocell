import { z } from "zod";
export type User = z.infer<typeof userSchema>;
import {} from "express-session";
import { userSchema } from "@repo/db";

declare module "express-session" {
  export interface Session {
    user: User;
  }
}

export * from "./context.express";
export * from "./trpc.express";
export * from "./router/_app";
export * from "./router/auth";
export * from "./router/computer";
export * from "./openApi"