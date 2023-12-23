import * as trpcNext from "@trpc/server/adapters/next";
import { type Session, auth } from "@turbocell/auth/server";

interface CreateInnerContextOptions
  extends Partial<trpcNext.CreateNextContextOptions> {
  session: Session | null;
}

export async function createContextInner(opts: CreateInnerContextOptions) {
  return {
    db,
    session: opts.session,
  };
}

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  const session = await auth();
  // const session = null;
  const contextInner = await createContextInner({ session });
  return {
    ...contextInner,
    req,
    res,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
