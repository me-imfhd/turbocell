import React, { Suspense } from "react";
import { MainNav } from "./main-nav";
import { cn } from "@turbocell/utils/utils";
import { Skeleton, buttonVariants } from "../../components";

export const SiteHeader = async ({ children }: React.PropsWithChildren) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav></MainNav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Suspense
              fallback={
                <Skeleton
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-muted text-muted-foreground"
                  )}
                >
                  Loading...
                </Skeleton>
              }
            >
              {/* <ProfileHeader /> */}
              {children}
            </Suspense>
          </nav>
        </div>
      </div>
    </header>
  );
};
