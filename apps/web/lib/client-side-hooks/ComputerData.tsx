"use client";

import { trpc } from "@harborx/api/trpc/client";
import { Button } from "@/components/ui/button";

export function ComputerData() {
  const { data,isLoading } = trpc.computers.getComputers.useQuery();
  const createComputer = trpc.computers.createComputer.useMutation();
  if(isLoading){
    return <div>Loading the computers...</div>
  }
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Button
        onClick={async() => {
          await createComputer.mutate({
            insertComputerParams: { brand: "intel", cores: 3 },
          });
          location.reload();
        }}
      >
        Create Computer
      </Button>
    </>
  );
}
