import { SiteFooter } from "@/src/components/layout/SiteFooter";
import { SiteHeader } from "@/src/components/layout/SiteHeader";
import React from "react";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader></SiteHeader>
      <div className="container flex-1 items-start ">{children}</div>
      <SiteFooter />
    </div>
  );
}
