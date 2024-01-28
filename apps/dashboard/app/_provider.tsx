"use client";

import { SessionProvider } from "@repo/auth/react";
import TrpcProvider from "@repo/trpc/trpc/Provider";
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
