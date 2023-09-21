import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

interface LobbyLayoutProps {
  children: React.ReactNode | null;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const user = await currentUser();
  return (
    <div>
      <SiteHeader user={user}></SiteHeader>
      <main>{children}</main>
      <SiteFooter></SiteFooter>
    </div>
  );
}
