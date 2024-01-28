import {
  createComputer,
  deleteAllComputers,
  updateComputer,
} from "@repo/api/api-endpoint-blogic/computers/mutations";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
import { getComputers } from "@repo/api/api-endpoint-blogic/computers/queries";
import { z } from "zod";
import {
  computerIdSchema,
  insertComputerParams,
  updateComputerParams,
} from "@repo/db/schema/computers";
import { computerSchema } from "@repo/db";
export const computersRouter = createTRPCRouter({
  getComputers: publicProcedure
    .meta({
      /* 👉 */ openapi: {
        method: "GET",
        path: "/get-computers",
        tags: ["computers"],
      },
    })
    .input(z.undefined())
    .output(
      z.object({
        computers: z.array(computerSchema),
        totalComputer: z.number(),
      })
    )
    .query(async () => {
      return getComputers();
    }),
  createComputer: protectedProcedure
    .meta({
      /* 👉 */ openapi: {
        method: "POST",
        path: "/create-computers",
        tags: ["computers"],
      },
    })
    .input(
      z.object({
        insertComputerParams,
      })
    )
    .output(z.object({ computer: computerSchema }))
    .mutation(async ({ input }) => {
      return createComputer(input.insertComputerParams);
    }),
  updateComputer: protectedProcedure
    .meta({
      /* 👉 */ openapi: {
        method: "PUT",
        path: "/update-computers",
        tags: ["computers"],
      },
    })
    .input(
      z.object({
        id: computerIdSchema,
        computer: updateComputerParams,
      })
    )
    .output(z.object({ computer: computerSchema }))
    .mutation(async ({ input }) => {
      return updateComputer(input.id.id, input.computer);
    }),
  deleteAllComputer: protectedProcedure
    .meta({
      /* 👉 */ openapi: {
        method: "DELETE",
        path: "/delete-computers",
        tags: ["computers"],
      },
    })
    .input(z.undefined())
    .output(z.object({ computersDeleted: z.number().int() }))
    .mutation(async () => {
      return deleteAllComputers();
    }),
});
