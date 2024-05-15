// app/providers.js
"use client";
import { useSession } from "@repo/auth/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://app.posthog.com",
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthProvider>{children}</PostHogAuthProvider>
    </PostHogProvider>
  );
}

export function PostHogAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      posthog.identify(session.userId, {
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
      });
    } else if (session.status === "unauthenticated") {
      posthog.reset();
    }
  }, [session]);
  return children;
}
