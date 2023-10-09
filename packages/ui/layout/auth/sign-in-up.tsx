import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Shell,
} from "@turbocell/shadcn";
import React from "react";

type AuthProps = {
  OAuthSignIn: JSX.Element;
  signInOrUpComp: JSX.Element;
  title: string;
  description: string;
  cardFooter: JSX.Element;
};
export function Auth({
  signInOrUpComp,
  title,
  description,
  cardFooter,
  OAuthSignIn,
}: AuthProps) {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {OAuthSignIn}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {signInOrUpComp}
        </CardContent>
        {cardFooter}
      </Card>
    </Shell>
  );
}
