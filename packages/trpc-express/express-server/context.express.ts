import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { randomUUID } from "crypto";
import { User } from ".";

export type Context_ex = {
  user: User | null;
  requestId: string;
  authenticated: boolean;
};

export const createContext_ex = async ({
  req,
  res,
}: CreateExpressContextOptions): Promise<Context_ex> => {
  const requestId = randomUUID();
  res.setHeader("x-request-id", requestId);

  let user: User | null = null;
  let authenticated: boolean = false;
  try {
    if (req.session.id && req.session.user) {
      authenticated = true;
      user = req.session.user;
    }
  } catch (cause) {
    console.error(cause);
  }

  return { user, requestId, authenticated };
};
