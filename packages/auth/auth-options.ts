import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { userSchema, db, z, sessionSchema } from "@turbocell/db";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User extends z.infer<typeof userSchema> {}
  interface Session extends z.infer<typeof sessionSchema> {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
  interface Profile {
    id: string;
  }
}

const useSecureCookies = process.env.VERCEL_ENV === "production";

// change turbocell-web.vercel.app with your actual deployed host domain name
const hostname =
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "production"
    ? "turbocell-web.vercel.app"
    : "localhost";

export function getNextAuthCookieName() {
  const cookiePrefix = process.env.NODE_ENV === "production" ? "__Secure-" : "";
  return `${cookiePrefix}next-auth.session-token`;
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET as string,
  cookies: {
    sessionToken: {
      name: getNextAuthCookieName(),
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: "." + hostname,
        secure: useSecureCookies,
      },
    },
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
  adapter: PrismaAdapter(db as any),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user = session.user || {};
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.image = user.image;
      }
      return session;
    },
    async jwt({ token, profile }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (profile?.id) {
          token.id = profile?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
});
