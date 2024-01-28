"use client";
import { trpc } from "@repo/trpc/trpc/client";
import { Button, Skeleton } from "@repo/ui/components";
import { toast } from "sonner";

export function ComputerData() {
  const utils = trpc.useContext();
  const { data: getComp, isLoading: getIsLoading } =
    trpc.computers.getComputers.useQuery();
  const createComp = trpc.computers.createComputer.useMutation({
    onSuccess: async () => {
      await utils.computers.getComputers.invalidate();
    },
    onError: (error) => {
      toast(`An error occurred: ${error.message}`);
    },
  });
  const deleteAllComputers = trpc.computers.deleteAllComputer.useMutation({
    onSuccess: async () => {
      await utils.computers.getComputers.invalidate();
    },
    onError: (error) => {
      toast(`An error occurred: ${error.message}`);
    },
  });

  return (
    <div className="flex flex-col place-items-center justify-center space-y-4">
      {getIsLoading || createComp.isLoading || deleteAllComputers.isLoading ? (
        <Skeleton className="bg-muted w-full h-44"></Skeleton>
      ) : (
        <>
          <div className="w-full bg-gradient-to-r from-background to-accent border rounded-md p-6">
            <pre>{JSON.stringify(getComp, null, 2)}</pre>
          </div>
          <div className="w-full bg-gradient-to-r from-background to-accent border rounded-md p-6">
            <pre>{JSON.stringify(deleteAllComputers.data, null, 2)}</pre>
          </div>
        </>
      )}
      <div>{createComp.error?.message}</div>
      <div className="m-4 space-x-4">
        <Button
          size={"sm"}
          onClick={() => {
            createComp.mutate({
              insertComputerParams: { brand: "intel", cores: 3 },
            });
          }}
        >
          Create Computer
        </Button>
        <Button
          variant={"destructive"}
          size={"sm"}
          onClick={() => {
            deleteAllComputers.mutate();
          }}
        >
          Delete All Computers
        </Button>
      </div>
    </div>
  );
}
