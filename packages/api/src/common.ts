import { z } from "zod";

export const idSchema = z.string().uuid();
export type IdType = z.infer<typeof idSchema>;