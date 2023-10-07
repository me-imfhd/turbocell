"use client";
import { ComputerData } from "@/lib/client-side-hooks/ComputerData";
import { trpc } from "@harborx/api/trpc/client";
import React from "react";

const Page = () => {
  const getSession = trpc.auth.getSession.useQuery();
  if (getSession.isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {JSON.stringify(getSession.data)}
      <ComputerData></ComputerData>
    </div>
  );
};

export default Page;
