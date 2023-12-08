"use client";
import { trpc } from "@turbocell/api/trpc/client";
import { Button, Shell } from "@turbocell/shadcn";
import React, { useState } from "react";

export default function Home() {
  const session = trpc.auth.getSession.useQuery();
  const [sessionMessage, setSessionMessage] = useState<{
    message: string;
  }>();
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
        <pre>{JSON.stringify(sessionMessage)}</pre>
      )}
    </Shell>
  );
}
