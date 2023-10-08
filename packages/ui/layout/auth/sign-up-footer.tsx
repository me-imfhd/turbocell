import { CardFooter } from "@harborx/shadcn";
import Link from "next/link";
import React from "react";

export function SignUpFooter() {
  return (
    <CardFooter>
      <div className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          aria-label="Sign in"
          href="/sign-in"
          className="text-primary underline-offset-4 transition-colors hover:underline"
        >
          Sign in
        </Link>
      </div>
    </CardFooter>
  );
}
