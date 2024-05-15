"use client";

import TrpcProvider from "@repo/trpc/src/trpc/Provider";
import { SessionProvider } from "@repo/auth/react";
import { ThemeProvider } from "@repo/ui/components/ThemeProvider";
import type { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TrpcProvider>
        <SessionProvider>{children}</SessionProvider>
      </TrpcProvider>
    </ThemeProvider>
  );
};

export default Provider;
