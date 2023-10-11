
import { Express } from "express";
import { getComputerRoute } from "./route/computers/getComputers";
import { createComputerRoute } from "route/computers/createComputers";
import { deleteComputerRoute } from "route/computers/deleteComputer";

export function setupRoutes(app: Express): void {
  app.use("/", getComputerRoute);
  app.use("/", createComputerRoute);
  app.use("/", deleteComputerRoute)
}
