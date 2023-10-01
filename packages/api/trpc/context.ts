import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { getUserAuth } from "@harborx/auth";
import { AuthSession } from "@harborx/auth"
import { db } from "@harborx/db"


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


/**
 * This helper generates the "internals" for a tRPC context. If you need to use
 * it, you can export it from here
 *
 * Examples of things you may need it for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
const createInnerTRPCContext = (opts: AuthSession) => {
  return {
    session: opts.session,
    db,
  };
};

/**
 * This is the actual context you'll use in your router. It will be used to
 * process every request that goes through your tRPC endpoint
 * @link https://trpc.io/docs/context
 */

export async function createTRPCContext(opts?: FetchCreateContextFnOptions ) {
 const { session } = await getUserAuth();
 const source = opts.req.headers.get("x-trpc-source") ?? "unknown";
 console.log(">>> tRPC Request from", source, "by", session?.user);
  return createInnerTRPCContext({
    session: session,
    headers: opts && Object.fromEntries(opts.req.headers),
  })
}

// exporting this so we can intialize our trpc api

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

// Go to ../server/trpc to continue
