import EmailProvider from "next-auth/providers/email";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import type { Adapter } from "@auth/core/adapters";
import {
  NextAuthOptions,
  type DefaultSession,
  getServerSession,
} from "next-auth";
import { db } from "@repo/db";
import type { sessionSchema, userSchema, z } from "@repo/db";
import NextAuth from "./next-auth";
import { CustomsendVerificationRequest } from "./sendVerificationRequest";

export type { Session, DefaultSession as DefaultAuthSession } from "next-auth";

export const providers = ["discord", "google", "facebook"] as const;
export type OAuthProviders = (typeof providers)[number];
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface User extends z.infer<typeof userSchema> {}
  interface Session extends z.infer<typeof sessionSchema>, DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
  interface Profile {
    id: string;
  }
}

// if (!process.env.GITHUB_ID) {
//   throw new Error('No GITHUB_ID has been provided.');
// }

const useSecureCookies = process.env.VERCEL_ENV === "production";
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const cookieDomain = useSecureCookies
  ? "repo-web.vercel.app"
  : "localhost";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: cookieDomain,
        secure: useSecureCookies,
      },
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        //@ts-ignore
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest(params) {
        CustomsendVerificationRequest(params);
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // async signIn({ user, account, email }) {
    //   const userExists = await db.user.findFirst({
    //     where: {
    //       email: user.email, //the user object has an email property, which contains the email the user entered.
    //     },
    //   });
    //   if (userExists) {
    //     return true; //if the email exists in the User collection, email them a magic login link
    //   } else {

    //   }
    // },
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
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export { getServerSession } from "next-auth";

export async function getUser() {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    return user;
  } catch (err) {
    console.error(err);
    throw new Error((err as Error).message ?? "Error, please try again");
  }
}
