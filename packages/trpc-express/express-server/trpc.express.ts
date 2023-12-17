// intializing trpc for express backend
// _ex referes to express

import { TRPCError, initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { OpenApiMeta } from "trpc-openapi";
import { ZodError } from "zod";
import { Context_ex } from "./context.express";

const t_ex = initTRPC
  .meta<OpenApiMeta>()
  .context<Context_ex>()
  .create({
    transformer: SuperJSON,
    errorFormatter(opts) {
      const { shape, error } = opts;
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.code === "BAD_REQUEST" && error.cause instanceof ZodError
              ? error.cause.flatten()
              : null,
        },
      };
    },
  });

export const createExpressTRPCRouter = t_ex.router;
export const publicProcedure_ex = t_ex.procedure;

const enforceUserIsAuthed = t_ex.middleware(async ({ ctx, next }) => {
  const user = ctx.user;
  if (!user && !ctx.authenticated) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "NOT AUTHENTICATED" });
  }
  return next({ ctx: { ...ctx, user: ctx.user } });
});

export const protectedProcedure_ex = t_ex.procedure.use(enforceUserIsAuthed);
