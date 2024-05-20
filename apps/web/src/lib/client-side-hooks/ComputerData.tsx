"use client";
import { GetComputerReturns } from "@repo/api/src/computers";
import { trpc } from "@repo/trpc/src/trpc/client";
import { Button } from "@repo/ui/components";
import { toast } from "sonner";

export function ComputerData({
  allComputers,
}: {
  allComputers: GetComputerReturns;
}) {
  const computers = trpc.computers.getComputers.useQuery(undefined, {
    initialData: allComputers,
  });
  const createComp = trpc.computers.createComputer.useMutation({
    onSuccess: async ({ computer: { id } }) => {
      const comps = await computers.refetch();
      toast.success(
        `Your created a computer, computer id: ${id}, total numbers of computers you hold: ${comps.data?.totalComputer}`
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const deleteUsersAllComputers =
    trpc.computers.deleteUsersAllComputers.useMutation({
      onSuccess: async ({ computersDeleted }) => {
        toast.success(
          `You deleted all your computers, total numbers of computers you deleted: ${computersDeleted}`
        );
        computers.refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return (
    <div className="flex flex-col place-items-center justify-center space-y-4">
      <div className="m-4 space-x-4">
        <Button
          size={"sm"}
          isLoading={createComp.isLoading}
          onClick={() => {
            createComp.mutate({ brand: "intel", cores: 3 });
          }}
        >
          Create Computer
        </Button>
        <Button
          isLoading={deleteUsersAllComputers.isLoading}
          variant={"destructive"}
          size={"sm"}
          onClick={() => {
            deleteUsersAllComputers.mutate();
          }}
        >
          Delete All Computers
        </Button>
      </div>
      <div className="w-full bg-gradient-to-r from-background to-accent border rounded-md p-6">
        <pre>{JSON.stringify(computers.data.computers, null, 2)}</pre>
      </div>
    </div>
  );
}
