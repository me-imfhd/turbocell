import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
    getSession: publicProcedure.query(({ctx})=>{
        return ctx.session
    }),
    getEasterEgg: protectedProcedure.query(()=>{
        return "You can see this secret message means you trying things out!"
    })
})