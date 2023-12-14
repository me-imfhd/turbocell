"use client";

import TrpcProvider from "@turbocell/api/trpc/Provider";
import { SessionProvider } from "@turbocell/auth/react";
import { ThemeProvider } from "@turbocell/ui/components/ThemeProvider";
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
