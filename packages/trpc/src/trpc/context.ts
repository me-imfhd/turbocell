import * as trpcNext from "@trpc/server/adapters/next";
import {
  type Session,
  getServerSession,
  authOptions,
} from "@repo/auth/server";

interface CreateInnerContextOptions
  extends Partial<trpcNext.CreateNextContextOptions> {
  session: Session | null;
}

export async function createContextInner(opts: CreateInnerContextOptions) {
  return {
    // db,
    session: opts.session,
  };
}

// for RSC(app router) we need to send only authOptions for getting server session
export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  const session = await getServerSession(authOptions);
  // const session = null;
  const contextInner = await createContextInner({ session });
  return {
    ...contextInner,
    req,
    res,
  };
}

// for api routes we need to send req and res objects to get session
export async function createContextApi({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  const session = await getServerSession(req, res, authOptions);
  // const session = null;
  const contextInner = await createContextInner({ session });
  return {
    ...contextInner,
    req,
    res,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
