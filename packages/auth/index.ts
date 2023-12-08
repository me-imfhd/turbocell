export const providers = ["discord", "google", "facebook"] as const;
export type OAuthProviders = (typeof providers)[number];

export { type Session, type User } from "next-auth";

// session
export { getUser } from "./getUser"; // server-side
export { useSession } from "./react"; // client-side
export { SessionProvider, signIn, signOut } from "next-auth/react";

// from auth-options
export { GET, POST, auth } from "./auth-options";
