import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  DefaultUser,
} from "next-auth";

import { CompleteUser, db } from "@harborx/db";

import { env } from "./env.mjs";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { GetServerSidePropsContext } from "next";
export type { Session } from "next-auth";

// Update this whenever adding new providers so that the client can
export const providers = ["discord", "google", "facebook"] as const;
export type OAuthProviders = (typeof providers)[number];

// todo extract this in a next-auth.d.ts declaration file
declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null | undefined;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser, CompleteUser {}
  interface Profile {
    id: string;
  }
}
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  // any?! I know.
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    // newUser: ""
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
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
// export const authOptions: NextAuthOptions = {
//   // secret: env.NEXTAUTH_SECRET,

//   // callbacks: {
//   //   session: ({ session, user }) => ({
//   //     ...session,
//   //     user: {
//   //       ...session.user,
//   //       id: user.id,
//   //     },
//   //   }),
//   // },
//   // adapter: PrismaAdapter(db),
//   pages:{
//     signIn:"/sign-in"
//   },
//   providers: [
//     DiscordProvider({
//       clientId: env.DISCORD_CLIENT_ID,
//       clientSecret: env.DISCORD_CLIENT_SECRET,
//     }),
//     GoogleProvider({
//       clientId: env.GOOGLE_CLIENT_ID,
//       clientSecret: env.GOOGLE_CLIENT_SECRET,
//     }),
//     /**
//      * ...add more providers here.
//      *
//      * Most other providers require a bit more work than the Discord provider. For example, the
//      * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
//      * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
//      *
//      * @see https://next-auth.js.org/providers/github
//      */
//   ],
// };
// @TODO - if you wanna have auth on the edge
// jwt: ({ token, profile }) => {
//   if (profile?.id) {
//     token.id = profile.id;
//     token.image = profile.picture;
//   }
//   return token;
// },

// @TODO
// authorized({ request, auth }) {
//   return !!auth?.user
// }

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

// export const checkAuth = async () => {
//   const { userId } = auth();
//   if (!userId) redirect("/sign-in");
// };

export { env } from "./env.mjs";
