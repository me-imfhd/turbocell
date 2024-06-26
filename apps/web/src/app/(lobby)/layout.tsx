import type { PropsWithChildren } from "react";
import React from "react";
import { SiteHeader } from "@/src/components/layout/SiteHeader";
import { SiteFooter } from "@/src/components/layout/SiteFooter";

export default function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader></SiteHeader>
      <main className="flex-1">{children}</main>
      <SiteFooter></SiteFooter>
    </div>
  );
}
