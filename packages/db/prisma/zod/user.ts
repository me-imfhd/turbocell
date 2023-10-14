import * as z from "zod"
import { CompleteAccount, relatedAccountSchema, CompleteSession, relatedSessionSchema } from "./index"

export const userSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  hashedPassword: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  stripeCustomerId: z.string().nullish(),
  stripeSubscriptionId: z.string().nullish(),
  stripePriceId: z.string().nullish(),
  stripeCurrentPeriodEnd: z.date().nullish(),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  accounts: relatedAccountSchema.array(),
  sessions: relatedSessionSchema.array(),
}))
