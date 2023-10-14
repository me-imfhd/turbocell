// we do not need this if we are using next-auth or other auth-service providers

// since our 
import { z } from "zod";
import { userSchema } from "../prisma/zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});
