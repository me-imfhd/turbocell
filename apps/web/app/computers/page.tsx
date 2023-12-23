"use client";
import { ComputerData } from "@/lib/client-side-hooks/ComputerData";
import { trpc } from "@turbocell/trpc/trpc/client";
import { useSession } from "@turbocell/auth/react";
import { Button, Shell } from "@turbocell/ui/components";
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
