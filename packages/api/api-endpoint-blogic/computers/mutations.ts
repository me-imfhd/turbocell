import { TRPCError } from "@trpc/server";
import { db } from "@repo/db";
import {
  type ComputerId,
  type NewComputerParams,
  type UpdateComputerParams,
  updateComputerSchema,
  insertComputerParams,
  computerIdSchema,
} from "@repo/db/schema/computers";

export const createComputer = async (computer: NewComputerParams) => {
  const newComputer = insertComputerParams.parse({
    ...computer,
  });
  try {
    const c = await db.computer.create({ data: newComputer });
    return { computer: c };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};

export const updateComputer = async (
  id: ComputerId,
  computer: UpdateComputerParams
) => {
  const { id: computerId } = computerIdSchema.parse({ id });
  const newComputer = updateComputerSchema.parse({
    ...computer,
  });
  try {
    const c = await db.computer.update({
      where: { id: computerId },
      data: newComputer,
    });
    return { computer: c };
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: (err as Error).message ?? "Error, please try again",
    });
  }
};

export const deleteComputer = async (id: ComputerId) => {
  const { id: computerId } = computerIdSchema.parse({ id });
  try {
    const c = await db.computer.delete({ where: { id: computerId } });
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
