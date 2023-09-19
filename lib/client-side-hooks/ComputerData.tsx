"use client"

import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { insertComputerParams } from "../db/schema/computers";

export function ComputerData() {
  const {data} = trpc.computers.getComputers.useQuery();
  const createComputer = trpc.computers.createComputer.useMutation();

  return (<>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <Button onClick={()=>{createComputer.mutate({insertComputerParams: {brand: "intel", cores:3}})}}>Create Computer</Button>
  </>
  );
}