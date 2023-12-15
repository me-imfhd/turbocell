import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { PrismaAdapter } from "@auth/prisma-adapter";
// import type { Adapter } from "@auth/core/adapters";
import { type DefaultSession } from "next-auth";
import { db } from "@turbocell/db";
import type { sessionSchema, userSchema, z } from "@turbocell/db";
import NextAuth from "./next-auth";

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
  type User = z.infer<typeof userSchema>;
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
const cookieDomain = useSecureCookies ? "turbocell-web.vercel.app" : "localhost";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: "/sign-in",
  },
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
});

export async function getUser() {
  try {
    const session = await auth();
    const user = session?.user;
    return user;
  } catch (err) {
    console.error(err);
    throw new Error((err as Error).message ?? "Error, please try again");
  }
}
