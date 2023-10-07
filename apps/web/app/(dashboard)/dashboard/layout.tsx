import SiteHeader from "@/components/layout/SiteHeader";
import { redirect } from "next/navigation";
import React, { DataHTMLAttributes } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start ">{children}</div>
    </div>
  );
}
