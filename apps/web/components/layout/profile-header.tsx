
import React from "react";
import { UserProfileDropdown } from "@turbocell/ui/layout/main-app";
import Link from "next/link";
import { buttonVariants } from "@turbocell/shadcn/ui";
import { auth } from "@turbocell/auth";

export const ProfileHeader = async () => {
  const data = await auth();
  const user = data?.user;
  const initials = `${user?.name?.charAt(0) ?? ""}`;
  return (
    <>
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
    </>
  );
};
