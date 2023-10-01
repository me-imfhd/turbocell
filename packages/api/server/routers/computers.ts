import { createComputer, updateComputer } from "@/lib/api/computers/mutations";
import { publicProcedure, createTRPCRouter } from "../trpc";
import { getComputers } from "@/lib/api/computers/queries"
import { z } from "zod";
import { computerIdSchema, insertComputerParams, updateComputerParams } from "@/lib/db/schema/computers";
export const computersRouter = createTRPCRouter({
  getComputers: publicProcedure.query(async () => {
    return getComputers();
  }),
  createComputer: publicProcedure
  .input(z.object({
    insertComputerParams
  }))
  .mutation(async({input})=>{
    return createComputer(input.insertComputerParams)
  }),
  updateComputer: publicProcedure
  .input(z.object({
    id: computerIdSchema,
    computer: updateComputerParams
  }))
  .mutation(async({input})=>{
    return updateComputer(input.id.id, input.computer)
  })
});
