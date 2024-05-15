import {
  createComputer,
  deleteAllComputers,
  updateComputer,
  getComputers,
  insertComputerParams,
  updateComputerParams,
} from "@repo/api/src/computers";

import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { ComputerModel } from "@repo/db";
export const computersRouter = createTRPCRouter({
  getComputers: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/get-computers",
        tags: ["computers"],
      },
    })
    .input(z.undefined())
    .output(
      z.object({ computers: z.array(ComputerModel), totalComputer: z.number() })
    )
    .query(async () => {
      return getComputers();
    }),
  createComputer: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/create-computers",
        tags: ["computers"],
      },
    })
    .input(insertComputerParams)
    .output(z.object({ computer: ComputerModel }))
    .mutation(async ({ input }) => {
      return createComputer(input);
    }),
  updateComputer: protectedProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/update-computers",
        tags: ["computers"],
      },
    })
    .input(updateComputerParams)
    .output(z.object({ computer: ComputerModel }))
    .mutation(async ({ input }) => {
      return updateComputer(input);
    }),
  deleteAllComputer: protectedProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/delete-computers",
        tags: ["computers"],
      },
    })
    .input(z.undefined())
    .output(z.object({ computersDeleted: z.number() }))
    .mutation(async () => {
      return deleteAllComputers();
    }),
});
