import { Button, Input, Label } from "@harborx/shadcn";
import React from "react";

export function SignUpForm() {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <Button className="w-full">Create Account</Button>
    </>
  );
}
