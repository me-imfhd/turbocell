"use client";
import { trpc } from "@turbocell/trpc/trpc/client";
import { useSession } from "@turbocell/auth/react";
import { Button, Shell } from "@turbocell/ui/components";
import React, { useState } from "react";

export default function Home() {
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
            setSessionMessage(session.data);
          }}
        >
          Get Session Message
        </Button>
      ) : (
        <>
          <pre>{JSON.stringify(sessionMessage)}</pre>
          <div>{JSON.stringify(user.data?.user)}</div>
        </>
      )}
    </Shell>
  );
}
