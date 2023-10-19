import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(3).max(24),
});


export const updateUserSchema = z.object({
  name: z.string().min(3).max(24),
  email: z.string().email(),
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

export type Login = z.infer<typeof loginSchema>;
export type SignUp = z.infer<typeof signupSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
export type UpdatePassword = z.infer<typeof updatePasswordSchema>;
