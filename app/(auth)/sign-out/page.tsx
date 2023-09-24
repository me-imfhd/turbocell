import { SignOutButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid place-items-center pt-4">
      <SignOutButton />
    </main>
  );
}