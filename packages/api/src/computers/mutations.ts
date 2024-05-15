import { TRPCError } from "@trpc/server";
import { db } from "@repo/db";
import {
  InsertComputer,
  UpdateComputer,
  insertComputerParams,
  updateComputerParams,
} from ".";
import { IdType, idSchema } from "../common";

export const createComputer = async (computer: InsertComputer) => {
  insertComputerParams.parse(computer);
  try {
    const c = await db.computer.create({ data: computer });
    return { computer: c };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};

export const updateComputer = async (input: UpdateComputer) => {
  updateComputerParams.parse(input);
  try {
    const c = await db.computer.update({
      where: { id: input.id },
      data: input,
    });
    return { computer: c };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};

export const deleteComputer = async (id: IdType) => {
  idSchema.parse(id);
  try {
    const c = await db.computer.delete({ where: { id } });
    return { computer: c };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};

export const deleteAllComputers = async () => {
  try {
    const c = await db.computer.deleteMany();
    return { computersDeleted: c.count };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};
