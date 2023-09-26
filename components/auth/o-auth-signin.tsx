"use client";

import React, { useState } from "react";
import { OAuthStrategy } from "@clerk/nextjs/server";
import { Icons } from "@/components/icons";
import { Button } from "../ui/button";
import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs";
import { toast } from "sonner";
type OAuthProviderProps = {
  name: string;
  strategy: OAuthStrategy;
  icon: keyof typeof Icons;
}[];

const oauthprovider: OAuthProviderProps = [
  { name: "Google", strategy: "oauth_google", icon: "google" },
  { name: "Facebook", strategy: "oauth_facebook", icon: "facebook" },
  { name: "Discord", strategy: "oauth_discord", icon: "discord" },
];

const OAuthSignIn = () => {
  const [isLoading, setIsLoading] = useState<OAuthStrategy | null>(null);
  const { signIn, isLoaded } = useSignIn();

  async function login(provider: OAuthStrategy) {
    if (!isLoaded) {
      return null;
    }
    try {
      setIsLoading(provider);
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (e) {
      console.error(e);
      setIsLoading(null);
      isClerkAPIResponseError(e)
        ? toast.error(
            e.errors[0]?.longMessage ?? "Something went wrong, please try again"
          )
        : toast.error("Something went wrong, please try again");
    }
  }
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthprovider.map((provider) => {
        const Icon = Icons[provider.icon];
        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.strategy}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => {
              void login(provider.strategy);
            }}
            disabled={isLoading !== null}
          >
            {isLoading === provider.strategy ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-label="true"
              />
            ) : (
              <Icon className="mr-2 h-4 w-4" aria-label="true" />
            )}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
};

export default OAuthSignIn;
