import { db } from "@harborx/db";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";
import type { Session } from "@harborx/auth";
import { getServerAuthSession } from "@harborx/auth";
import { PrismaClient } from "@prisma/client"; // don't remove this

/**
 * DON'T NEED TO EDIT THIS FILE, UNLESS:
 * You want to modify request context
 *
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API
 *
 * These allow you to access things like the database, the session, etc, when
 * processing a request
 *
 */

interface CreateContextOptions {
  session: Session | null;
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    db,
  };
};
/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });
  return createInnerTRPCContext({
    session,
  });
};
//took me 9 hours of grueling unpaid labour with no water to figure this shit out on my own

// exporting this so we can intialize our trpc api
export type Context = inferAsyncReturnType<typeof createTRPCContext>;
// Go to ../server/trpc to continue
