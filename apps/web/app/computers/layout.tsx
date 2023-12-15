import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProfileHeader } from "@/components/layout/profile-header";
import React from "react";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader>
        <ProfileHeader />
      </SiteHeader>
      <div className="container flex-1 items-start ">{children}</div>
      <SiteFooter />
    </div>
  );
}
