import type { PropsWithChildren } from "react";
import React from "react";
import { ProfileHeader } from "@/components/layout/profile-header";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader>
        <ProfileHeader />
      </SiteHeader>
      <main className="flex-1">{children}</main>
      <SiteFooter></SiteFooter>
    </div>
  );
}
