"use client";

import { Button, Input, Label } from "@turbocell/shadcn";
import { signIn } from "@turbocell/auth";
import React, { useState } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          type="email"
          placeholder="m@example.com"
        />
      </div>
      <Button
        onClick={async () => {
          await signIn("email", { email, callbackUrl: "/" });
        }}
        className="w-full"
      >
        Continue With Email
      </Button>
    </>
  );
}
