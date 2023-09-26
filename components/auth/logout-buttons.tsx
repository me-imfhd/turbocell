"use client";

import React, { useTransition } from "react";
import { Button, buttonVariants } from "../ui/button";
import { useMounted } from "@/lib/hooks/use-mounted";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const LogOutButtons = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex w-full items-center space-x-2">
      {isMounted ? (
        <>
          <SignOutButton
            signOutCallback={() => {
              return startTransition(() => {
                router.push(`${window.location.origin}/?redirect=false`);
              });
            }}
          >
            <Button
              disabled={isPending}
              size="sm"
              aria-label="Log out"
              className="w-full"
            >
              {isPending && <Icons.spinner className="mr-2 h-4 w-4" />}
              Log out
            </Button>
          </SignOutButton>
          <Button size={"sm"} className="w-full" variant="outline">
            Go back
          </Button>
        </>
      ) : (
        <>
          <Skeleton
            className={cn(
              buttonVariants({ size: "default" }),
              "w-full bg-muted text-muted-foreground"
            )}
          ></Skeleton>
          <Skeleton
            className={cn(
              buttonVariants({ size: "default" }),
              "w-full bg-muted text-muted-foreground"
            )}
          ></Skeleton>
        </>
      )}
    </div>
  );
};

export default LogOutButtons;
