import { NextFunction, Request, Response } from "express";
import { getUser } from "@turbocell/auth";
import type { User } from "@turbocell/auth";

declare module "express" {
  interface Request {
    user?: User;
  }
}

export async function NextAuthMid(req: Request, res: Response, next: NextFunction) {
  // this will make a getsession request to the next app that we have made for authencation purpose
  const user = await getUser();
  if (!user) {
    return res.json({ message: "Unauthenticated" });
  }
  req.user = user
  next();
}
