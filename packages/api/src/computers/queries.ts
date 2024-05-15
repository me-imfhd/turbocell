import { db } from "@repo/db";
import { TRPCError } from "@trpc/server";
import { IdType, idSchema } from "../common";

export const getComputers = async () => {
  try {
    const c = await db.computer.findMany();
    const totc = await db.computer.count();
    return { computers: c, totalComputer: totc };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};

export const getComputerById = async (id: IdType) => {
  idSchema.parse({ id });
  try {
    const c = await db.computer.findFirst({ where: { id } });
    return { computer: c };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};
