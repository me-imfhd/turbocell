import { createExpressTRPCRouter } from "../trpc.express";
import { authRouter_ex } from "./auth";
import { computersRouter_ex } from "./computer";

// express app router
export const appRouter_ex = createExpressTRPCRouter({
  computers: computersRouter_ex,
  auth: authRouter_ex,
});

export type ExpressAppRouter = typeof appRouter_ex;
