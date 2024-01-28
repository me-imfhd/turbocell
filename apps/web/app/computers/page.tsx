"use client";
import { ComputerData } from "@/lib/client-side-hooks/ComputerData";
import { trpc } from "@repo/trpc/trpc/client";
import { useSession } from "@repo/auth/react";
import { Button, Shell } from "@repo/ui/components";
import React, { useState } from "react";

export default function Page() {
  const session = trpc.auth.getSession.useQuery();
  const [sessionMessage, setSessionMessage] = useState<{
    message: string;
  }>();
  const user = useSession();
  return (
    <Shell
      as={"div"}
      className="flex flex-col place-items-center justify-center"
    >
      {!sessionMessage ? (
        <Button
          onClick={() => {
            try {
              setSessionMessage(session.data);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Get Session Message
        </Button>
      ) : (
        <>
          <pre>{JSON.stringify(sessionMessage)}</pre>
        </>
      )}
      <div>{JSON.stringify(user.data?.user)}</div>
      <ComputerData></ComputerData>
    </Shell>
  );
}

{
}
