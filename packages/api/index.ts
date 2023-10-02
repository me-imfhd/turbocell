export type { AppRouter } from "./server/routers/_app";
export { appRouter } from "./server/routers/_app";
export { createTRPCContext } from "./trpc/context";
export type { Context } from "./trpc/context";

// input and output types inference export
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
import { AppRouter } from "./server/routers/_app";
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;