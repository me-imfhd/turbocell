"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import type { OAuthProviders } from "@turbocell/auth";
import { Icons } from "@turbocell/utils/icons";
import { Button } from "@turbocell/shadcn";

type OAuthProviderProps = {
  name: string;
  provider: OAuthProviders;
  icon: keyof typeof Icons;
}[];
const oauthprovider: OAuthProviderProps = [
  { name: "Google", provider: "google", icon: "google" },
  { name: "Facebook", provider: "facebook", icon: "facebook" },
  { name: "Discord", provider: "discord", icon: "discord" },
];

const OAuthSignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function handleClick(provider: OAuthProviders) {
    try {
      const data = await signIn(provider, { callbackUrl: "/", redirect: true });
      if (data?.error) {
        console.log(data.error);
        toast.error(data.error);
      } else {
        // data && data.url && router.push(data?.url);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthprovider.map((provider) => {
        const Icon = Icons[provider.icon];
        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.provider}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={async() => {
              setIsLoading(true);
              await handleClick(provider.provider);
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-label="loading..."
              />
            ) : (
              <Icon className="mr-2 h-4 w-4" aria-label="laoding..." />
            )}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
};

export default OAuthSignIn;
