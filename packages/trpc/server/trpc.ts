import { getUser } from "@repo/auth/server";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { OpenApiMeta } from "trpc-openapi";
import type { Context } from "./context";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */

/**
 * You Found it!
 * 2. INITIALIZATION
 *
 * This is where the trpc api is initialized, connecting the context and
 * transformer
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

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these
 * a lot in the /src/server/api/routers folder
 */

/**
 * This is how you create new routers and subrouters in your tRPC API
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthed) procedure
 *
 * This is the base piece you use to build new queries and mutations on your
 * tRPC API. It does not guarantee that a user querying is authorized, but you
 * can still access user session data if they are logged in
 */
export const publicProcedure = t.procedure;

/**
 * Reusable middleware that enforces users are logged in before running the
 * procedure
 */
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
/**
 * Protected (authed) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use
 * this. It verifies the session is valid and guarantees ctx.session.user is not
 * null
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

export const apiProcedure = publicProcedure.use((opts) => {
  if (!opts.ctx.req || !opts.ctx.res) {
    throw new Error("You are missing `req` or `res` in your call.");
  }
  return opts.next({
    ctx: {
      // We overwrite the context with the truthy `req` & `res`, which will also overwrite the types used in your procedure.
      req: opts.ctx.req,
      res: opts.ctx.res,
    },
  });
});

// In a web application, many procedures can depend on req (request) and res (response) objects. These objects are provided by the server-side framework (like Express.js or Next.js) and carry crucial information about the HTTP request and response. Here are a few examples of procedures that may depend on req and res:

// Session Management: Procedures that handle user sessions need to access the req object to retrieve session cookies and the res object to set new cookies. For instance, in the context of authentication, a procedure may need to read a session identifier from a cookie in the req object or set a new session identifier in a cookie in the res object.
// Authorization: Procedures that handle authorization need to access the req object to determine the user's permissions. For example, a procedure might need to check if the user's role, stored in a JWT token in the req headers, allows them to access certain resources.
// Request Data Processing: Procedures that process request data (like form data or API parameters) need to access the req object to retrieve this data. For example, a procedure might need to read the body of a POST request to create a new resource in the database.
// Response Generation: Procedures that generate HTTP responses need to access the res object to set status codes, headers, and body. For example, a procedure might need to set a specific status code and send a JSON response with the res object.
// Error Handling: Procedures that handle errors need to access the res object to send appropriate error responses to the client. For example, a procedure might catch an error, log it for debugging purposes, and then use the res object to send an error message to the client.
// Routing: Procedures that handle routing need to access the req object to determine the current route. For example, a procedure might need to check the URL in the req object to conditionally perform some action.
// Remember that these are general examples and the exact procedures that depend on req and res will vary based on the specifics of your application
