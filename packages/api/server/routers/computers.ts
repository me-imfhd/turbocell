import {
  createComputer,
  deleteAllComputers,
  updateComputer,
} from "../../api-endpoint-blogic/computers/mutations";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
import { getComputers } from "../../api-endpoint-blogic/computers/queries";
import { z } from "zod";
import {
  computerIdSchema,
  insertComputerParams,
  updateComputerParams,
} from "@turbocell/db/schema/computers";
export const computersRouter = createTRPCRouter({
  getComputers: publicProcedure.query(async () => {
    return getComputers();
  }),
  createComputer: protectedProcedure
    .input(
      z.object({
        insertComputerParams,
      })
    )
    .mutation(async ({ input }) => {
      return createComputer(input.insertComputerParams);
    }),
  updateComputer: protectedProcedure
    .input(
      z.object({
        id: computerIdSchema,
        computer: updateComputerParams,
      })
    )
    .mutation(async ({ input }) => {
      return updateComputer(input.id.id, input.computer);
    }),
  deleteAllComputer: protectedProcedure.mutation(async () => {
    return deleteAllComputers();
  }),
});
