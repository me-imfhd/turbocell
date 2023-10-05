import React from "react";
import { MainNav } from "./main-nav";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import UserProfileDropdown from "./user-profile-dropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@harborx/auth";

const SiteHeader = async () => {
  const data = await getServerSession(authOptions);
  const user = data?.user;
  const initials = `${user?.name?.charAt(0) ?? ""}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav></MainNav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {user ? (
              <>
                <span>Go To Dashboard</span>
                <UserProfileDropdown
                  data={data}
                  initials={initials}
                ></UserProfileDropdown>
              </>
            ) : (
              <Link href={"/sign-in"}>
                <div
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Sign In
                  <span className="sr-only">Sign In</span>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
