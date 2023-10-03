import DiscordProvider from "next-auth/providers/discord";

import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";

import { db } from "@harborx/db";

import { env } from "./env";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { GetServerSidePropsContext } from "next";
export type { Session } from "next-auth";

// Update this whenever adding new providers so that the client can
export const providers = ["discord"] as const;
export type OAuthProviders = (typeof providers)[number];

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    DiscordProvider({
      clientId: env.server.DISCORD_CLIENT_ID,
      clientSecret: env.server.DISCORD_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};
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

export { env } from "./env";
