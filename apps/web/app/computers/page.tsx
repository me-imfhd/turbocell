"use client";
import { ComputerData } from "@/lib/client-side-hooks/ComputerData";
import { trpc } from "@turbocell/api/trpc/client";
import { Button } from "@turbocell/shadcn";
import { Session } from "next-auth";
import React, { useState } from "react";

const Page = () => {
  const session = trpc.auth.getSession.useQuery();
  const [sessionMessage, setSessionMessage] = useState<{
    message: string;
  }>();
  return (
    <div className="flex flex-col place-items-center justify-center">
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

      <ComputerData></ComputerData>
    </div>
  );
};

export default Page;
