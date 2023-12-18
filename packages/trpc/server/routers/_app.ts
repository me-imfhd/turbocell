import { computersRouter } from "./computers";
import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";

export const appRouter = createTRPCRouter({
  computers: computersRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
