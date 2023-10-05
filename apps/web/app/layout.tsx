import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { fontSans, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import TailwindResposivenessIndicator from "@/components/TailwindResposivenessIndicator";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tee Harbor X",
  description:
    "This platform empowers creators to sell merchandise through social media integration.",
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
            {/* <TrpcProvider> */}
            {children}
            <TailwindResposivenessIndicator />
            <Toaster />
            {/* </TrpcProvider> */}
          </ThemeProvider>
      </body>
    </html>
  );
}
