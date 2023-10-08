import { CardFooter } from "@harborx/shadcn";
import Link from "next/link";
import React from "react";

export function SignInFooter() {
  return (
    <CardFooter className="flex flex-wrap items-center justify-between gap-2">
      <div className="text-sm text-muted-foreground">
        <span className="mr-1 hidden sm:inline-block">
          Don&apos;t have an account?
        </span>
        <Link
          aria-label="Sign up"
          href="/sign-up"
          className="text-primary underline-offset-4 transition-colors hover:underline"
        >
          Sign up
        </Link>
      </div>
      <Link
        aria-label="Reset password"
        href="/signin/reset-password"
        className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
      >
        Reset password
      </Link>
    </CardFooter>
  );
}
