import { SiteHeader } from "@turbocell/ui/layout/turbocell";
import { SiteFooter } from "@turbocell/ui/layout/turbocell";
import React, { PropsWithChildren } from "react";
import { ProfileHeader } from "@/components/layout/profile-header";

export default async function LobbyLayout({ children }: PropsWithChildren) {
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
