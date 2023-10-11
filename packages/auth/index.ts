import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  DefaultUser,
} from "next-auth";

import { CompleteSession, CompleteUser, db } from "@turbocell/db";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
export type { Session } from "next-auth";
export type OAuthProviders = (typeof providers)[number];

// todo extract this in a next-auth.d.ts declaration file
// here basically we are making basic next auth User, Session, Profile interfaces and extending it with our primsa schema
// here you are taking things in your hand be careful
declare module "next-auth" {
  interface User extends DefaultUser, CompleteUser {}
  interface Session extends CompleteSession {
    user: {
      id?: string | null | undefined;
    } & DefaultSession["user"] &
      User;
  }
  interface Profile {
    id: string;
  }
}
// Update this whenever adding new providers so that the client can
export const providers = ["discord", "google", "facebook"] as const;
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  // any?! I know.
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    // newUser: ""
  },
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
};

// @TODO
// authorized({ request, auth }) {
//   return !!auth?.user
// }

export type { User } from "next-auth";
export async function getUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return null;
  }
  const user = session?.user;

  return user;
}
