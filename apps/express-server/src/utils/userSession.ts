import { Request, Response } from "express";
import type { User } from "server";

export function getUserSession(req: Request, res: Response) {
  if (!req.session.user) {
    res.json({
      message: "You are not logged in",
    });
    return null;
  }
  return req.session.user;
}
export function setUserSession(req: Request, res: Response, setUser: User) {
  try {
    req.session.user = setUser;
  } catch (err) {
    res.json({
      message: "Unable to set user session to server, try again",
      error: err,
    });
  }
}

export function updateUserSession(
  req: Request,
  res: Response,
  updateUser: User
) {
  if (!req.session.user) {
    res.json({
      message: "You are not logged in",
    });
    return null;
  }
  try {
    req.session.user = updateUser;
    return;
  } catch (err) {
    return res.json({ message: "Unable to update user, try again", error: err });
  }
}
