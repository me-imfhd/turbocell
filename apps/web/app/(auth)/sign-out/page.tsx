import {LogOutButtons} from "@/app/(auth)/sign-out/logout-buttons";
import { Shell } from "@turbocell/ui/components";
import {PageHeader} from "@/components/page-header"

export default function Page() {
  return (
    <Shell className="max-w-xs">
      <PageHeader
        title="Sign out"
        description="Are you sure you want to sign out?"
        size="sm"
        className="text-center"
      />
      <LogOutButtons />
    </Shell>
  );
}