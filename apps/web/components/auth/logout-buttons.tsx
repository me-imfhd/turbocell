"use client";

import React, { useState, useTransition } from "react";
import { Button, buttonVariants } from "../ui/button";
import { useMounted } from "@/lib/hooks/use-mounted";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const LogOutButtons = () => {
  const isMounted = useMounted();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <div className="flex w-full items-center space-x-2">
      {isMounted ? (
        <>
          <Button
            size="sm"
            aria-label="Log out"
            className="w-full"
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true);
              const data = await signOut({ redirect: true, callbackUrl: "/" });
            }}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log out
          </Button>
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
