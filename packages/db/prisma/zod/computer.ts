import * as z from "zod"

export const ComputerModel = z.object({
  id: z.string(),
  brand: z.string(),
  cores: z.number().int(),
})
