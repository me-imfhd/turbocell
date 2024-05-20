import { ComputerData } from "@/src/lib/client-side-hooks/ComputerData";
import { Shell } from "@repo/ui/components";
import React, { Suspense } from "react";
import { checkAuth } from "@repo/api/src/common";
import { getComputers } from "@repo/api/src/computers";
import { Loader } from "@repo/ui/icons";

export default async function Page() {
  await checkAuth();
  const allComputers = await getComputers();
  return (
    <Shell
      as={"div"}
      className="flex flex-col place-items-center justify-center"
    >
      <Suspense fallback={<Loader className="animate-spin w-4 h-4" />}>
        <ComputerData allComputers={allComputers}></ComputerData>
      </Suspense>
    </Shell>
  );
}
