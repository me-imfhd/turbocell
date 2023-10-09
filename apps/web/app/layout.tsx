import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@turbocell/shadcn";
import { fontSans, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@turbocell/ui/components/ThemeProvider";
import { cn } from "@turbocell/utils/utils";
import TailwindResposivenessIndicator from "@turbocell/ui/components/TailwindResposivenessIndicator";
import { PropsWithChildren } from "react";
import TrpcProvider from "@turbocell/api/trpc/Provider"

export const metadata: Metadata = {
  title: "Turbo Cell",
  description:
    "",
  themeColor: [
    { media: "(prefers-color-scheme: light", color: "white" },
    { media: "(prefers-color-scheme: dark", color: "black" },
  ],
};
// You might be wonder where is session provider for next-auth, well we necessarily don't need it in app router
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TrpcProvider>
            {children}
            <TailwindResposivenessIndicator />
            <Toaster />
            </TrpcProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
