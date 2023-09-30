import { User } from "@clerk/nextjs/server";
import React from "react";
import { MainNav } from "./main-nav";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import UserProfileDropdown from "./user-profile-dropdown";

export type SiteHeaderProps = {
  user: User | null;
};
const SiteHeader = ({ user }: SiteHeaderProps) => {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav></MainNav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {user ? (<>
              <span>Go To Dashboard</span>
              <UserProfileDropdown
                user={user}
                initials={initials}
                email={email}
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
