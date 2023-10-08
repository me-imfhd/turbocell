import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

import { Auth, SignUpForm, SignUpFooter } from "@harborx/ui/layout";
import OAuthSignIn from "../o-auth-signin";
export default function Page() {
  return (
    <Auth
      signInOrUpComp={<SignUpForm />}
      cardFooter={<SignUpFooter />}
      title="Create an Account"
      description="Enter your email below to create your account"
      OAuthSignIn={<OAuthSignIn/>}
    />
  );
}

