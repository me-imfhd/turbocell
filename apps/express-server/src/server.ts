import { json, urlencoded } from "body-parser";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import session from "express-session";
import cors from "cors";
import { userSchema } from "@repo/db";
import cookieParser from "cookie-parser";
import { z } from "zod";
import { checkAuthenticated } from "utils/checkAuth";
import { getUserSession } from "utils/userSession";
// https://expressjs.com/en/resources/middleware.html visit here to add more middlewares of your choice

export type User = z.infer<typeof userSchema>;

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(urlencoded({ extended: true }))
    .use(cookieParser())
    .use(json())
    .use(cors())
    .use(helmet())
    /* 
    this creates server for storing the session data, here is your data stored
    this uses your backend not the database
    to store things in your own server database
    check this out to learn more https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8
    it has redis-server implementation
    */
    .use(
      session({
        secret: process.env.EXPRESS_SECRET as string,
        resave: false,
        saveUninitialized: false,
      })
    )
    .get("/user", checkAuthenticated, (req: Request, res: Response) => {
      const user = getUserSession(req, res);
      if (!user) {
        return res.send("User Session not found, try again or re-login");
      }
      return res.send(`
      <div style="margin-bottom: 10px;">
          <div>Name: ${user?.name}</div>
          <div>Email: ${user?.email}</div>
          <img src=${user?.image} style="width: auto; height:400px; padding: 10px; border: 1px solid lightgray; border-radius: 5px;">
        </div>
      `);
    });

  return app;
};

// this will help us to access all the user details from the req.session.user,
// with every request we have this regardless os what type of request it is,
// to use this when we login we attach user object to it  and when we log out we clear the entire session
declare module "express-session" {
  export interface Session {
    user: User;
  }
}
