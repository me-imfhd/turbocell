import { Auth } from "@turbocell/ui/layout";
import OAuthSignIn from "../o-auth-signin";
import { SignInForm } from "./sign-in-form";

export default function Page() {
  return (
    <Auth
      title="Sign In"
      description="Choose your preferred sign in method"
      OAuthSignIn={<OAuthSignIn />}
      signInComp={<SignInForm />}
    />
  );
}
