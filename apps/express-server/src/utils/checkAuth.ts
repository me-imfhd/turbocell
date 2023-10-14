import { NextFunction, Request, Response } from "express";

export async function checkAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.session.id && req.session.user) {
    next();
  } else {
    res.send("Not authorized");
  }
}
