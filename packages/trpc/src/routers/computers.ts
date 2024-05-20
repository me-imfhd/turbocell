import {
  createComputer,
  updateComputer,
  getComputers,
  insertComputerParams,
  updateComputerParams,
  getUserComputers,
  deleteUsersAllComputers,
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
  getUserComputers: protectedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/get-user-computers",
        tags: ["computers"],
      },
    })
    .input(z.undefined())
    .output(z.object({ computers: z.array(ComputerModel) }))
    .query(async ({ ctx: { userId } }) => {
      return getUserComputers(userId);
    }),
  createComputer: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/create-computers",
        tags: ["computers"],
      },
    })
    .input(insertComputerParams.omit({ userId: true })) // no need to worry about sending userId from frontend, user just needs to be logged in
    .output(z.object({ computer: ComputerModel }))
    .mutation(async ({ input, ctx: { userId } }) => {
      return createComputer({ ...input, userId });
    }),
  updateComputer: protectedProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/update-computers",
        tags: ["computers"],
      },
    })
    .input(updateComputerParams.omit({ userId: true }))
    .output(z.object({ computer: ComputerModel }))
    .mutation(async ({ input, ctx: { userId } }) => {
      return updateComputer({ ...input, userId });
    }),
  deleteUsersAllComputers: protectedProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/delete-computers",
        tags: ["computers"],
      },
    })
    .input(z.undefined())
    .output(z.object({ computersDeleted: z.number() }))
    .mutation(async ({ ctx: { userId } }) => {
      return deleteUsersAllComputers(userId);
    }),
});
