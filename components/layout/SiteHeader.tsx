import { User } from "@clerk/nextjs/server";
import React from "react";
import { MainNav } from "./main-nav";

interface SiteHeaderProps {
  user: User | null;
}
const SiteHeader = ({ user }: SiteHeaderProps) => {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <MainNav></MainNav>
      <div className="container flex h-16 items-center"></div>
    </header>
  );
};

export default SiteHeader;
