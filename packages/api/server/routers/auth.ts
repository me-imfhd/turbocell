import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { getUser } from "@harborx/auth";
import { db } from "@harborx/db";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(async () => {
    const user = await getUser();
    if (!user?.id || !user.email) {
      return {message:"You are not authenticated, please log in"}
    }
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    if (!dbUser) {
      // create user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }
    return { message:"You are authenticated"};
  }),
  getEasterEgg: protectedProcedure.query(() => {
    return "You can see this secret message means you trying things out and you are logged in!";
  }),
});
