"use client";

import TrpcProvider from "@repo/trpc/src/trpc/Provider";
import { SessionProvider } from "@repo/auth/react";
import { ThemeProvider } from "@repo/ui/components/ThemeProvider";
import type { PropsWithChildren } from "react";
import { CSPostHogProvider } from "./analytics/provider";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TrpcProvider>
        <SessionProvider>
          <CSPostHogProvider>{children}</CSPostHogProvider>
        </SessionProvider>
      </TrpcProvider>
    </ThemeProvider>
  );
};

export default Provider;
