// we do not need this if we are using next-auth or other auth-service providers

// since our
import { z } from "zod";
import { userSchema } from "../prisma/zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(3).max(24),
});

export const updateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(24),
  image: z.string().optional(),
});

export const updatePasswordSchema = z
  .object({
    password: z.string().min(8).max(16),
    confirmPassword: z.string().min(8).max(16),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });
