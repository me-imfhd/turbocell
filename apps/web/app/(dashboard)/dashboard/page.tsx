"use client";

import { trpc } from "@harborx/api/trpc/client";
import React from "react";

const Page = () => {
  const getComputers = trpc.auth.getSession.useQuery();
  if (!getComputers.data) {
    return <div> data undefined</div>;
  }
  return <div>{JSON.stringify(getComputers.data)}</div>;
};

export default Page;
