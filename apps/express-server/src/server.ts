import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import express,{Express}from "express";
import cors from "cors";

// https://expressjs.com/en/resources/middleware.html visit here to add more middlewares of your choice
export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/example", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};