import { Express } from "express";
import { getComputerRoute } from "./route/computers/getComputers";
import { createComputerRoute } from "route/computers/createComputers";
import { deleteComputerRoute } from "route/computers/deleteComputer";
import { loginRouter } from "route/auth/login";
import { signupRoute } from "route/auth/signup";
import { logoutRouter } from "route/auth/logout";
import { updateUserRoute } from "route/auth/updateUser";

export function setupRoutes(app: Express): void {
  app.use("/", getComputerRoute);
  app.use("/", createComputerRoute);
  app.use("/", deleteComputerRoute);
  app.use("/", loginRouter);
  app.use("/", signupRoute);
  app.use("/", logoutRouter);
  app.use("/", updateUserRoute);
}
