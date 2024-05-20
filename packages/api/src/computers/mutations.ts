import { db } from "@repo/db";
import {
  InsertComputer,
  UpdateComputer,
  insertComputerParams,
  updateComputerParams,
} from ".";
import { IdType, idSchema, throwTRPCError } from "../common";
import { createComputerLimit } from "../rate-limit";
import { TRPCError } from "@trpc/server";

export const createComputer = async (computer: InsertComputer) => {
  insertComputerParams.parse(computer);
  const RL = await createComputerLimit.limit(computer.userId);
  if (!RL.success) {
    throw new TRPCError({
      code: "TOO_MANY_REQUESTS",
      message: "Rate Limit Exceeded, Try after few minutes.",
    });
  }
  console.log("Remaining Limit: ", RL.remaining);
  try {
    const c = await db.computer.create({ data: computer });
    return { computer: c };
  } catch (err) {
    throw throwTRPCError(err);
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
    throw throwTRPCError(err);
  }
};

export const deleteComputer = async (id: IdType) => {
  idSchema.parse(id);
  try {
    const c = await db.computer.delete({ where: { id } });
    return { computer: c };
  } catch (err) {
    throw throwTRPCError(err);
  }
};

export const deleteUsersAllComputers = async (userId: IdType) => {
  idSchema.parse(userId);
  try {
    const c = await db.computer.deleteMany({ where: { userId } });
    return { computersDeleted: c.count };
  } catch (err) {
    throw throwTRPCError(err);
  }
};
