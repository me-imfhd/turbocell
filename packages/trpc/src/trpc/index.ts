import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { OpenApiMeta } from "trpc-openapi";
import type { Context } from "./context";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC
  .meta<OpenApiMeta>()
  .context<Context>()
  .create({
    transformer: superjson,
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

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(async (opts) => {
  if (!opts.ctx.session?.user?.email) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "NOT AUTHENTICATED" });
  }
  const user = opts.ctx.session.user;
  return opts.next({
    ctx: {
      ...opts.ctx,
      userId: user.id,
      user: user,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
