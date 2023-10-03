import {
  createComputer,
  updateComputer,
} from "../../api-endpoint-blogic/computers/mutations";
import { publicProcedure, createTRPCRouter } from "../trpc";
import { getComputers } from "../../api-endpoint-blogic/computers/queries";
import { z } from "zod";
import {
  computerIdSchema,
  insertComputerParams,
  updateComputerParams,
} from "@harborx/db/schema/computers";
export const computersRouter = createTRPCRouter({
  getComputers: publicProcedure.query(async () => {
    return getComputers();
  }),
  createComputer: publicProcedure
    .input(
      z.object({
        insertComputerParams,
      })
    )
    .mutation(async ({ input }) => {
      return createComputer(input.insertComputerParams);
    }),
  updateComputer: publicProcedure
    .input(
      z.object({
        id: computerIdSchema,
        computer: updateComputerParams,
      })
    )
    .mutation(async ({ input }) => {
      return updateComputer(input.id.id, input.computer);
    }),
});
