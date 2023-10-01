import SiteHeader from "@/components/layout/SiteHeader";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { DataHTMLAttributes } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser();

  if (!user) {
    redirect("/signin");
  }
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="container flex-1 items-start ">{children}</div>
    </div>
  );
}
