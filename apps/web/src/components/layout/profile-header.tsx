import React from "react";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components";
import { UserProfileDropdown } from "./user-profile-dropdown";
import { auth } from "@repo/api/src/common";

export const ProfileHeader = async () => {
  const user = await auth();
  const initials = `${user?.name?.charAt(0) ?? ""}`;
  return (
    <>
      {user ? (
        <>
          <span>Go To Dashboard</span>
          <UserProfileDropdown
            user={user}
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
    </>
  );
};
