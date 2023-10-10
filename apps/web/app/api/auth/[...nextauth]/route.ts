import { authOptions } from "@turbocell/auth";
import NextAuth from "next-auth";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const handler = NextAuth(authOptions) as any;
export { handler as GET, handler as POST };
