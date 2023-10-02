export const env: {
  server: {
    NODE_ENV: "development" | "test" | "production";
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    DATABASE_URL: string;
    CLERK_SECRET_KEY: string;
    NEXT_PUBLIC_APP_URL?: string;
  };
  client: {
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
  };
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: string | undefined;
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: string | undefined;
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string | undefined;
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string | undefined;
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string | undefined;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
  };
};
