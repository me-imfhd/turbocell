import React from "react";
import { Shell } from "../shells/shell";
import { Button } from "../ui/button";
import { Icons } from "../icons";

const Share = () => {
  return (
    <Shell as={"section"}>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="leading-10 text-2xl space-y-6 md:space-y-20 place-items-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Connect your social channels. Sell more merch.
          </h2>
          <img
            src="/images/sharesocial.jpg"
            alt="create"
            className="object-cover  md:hidden object-center h-2/4 w-full"
          />
          <p className="text-sm md:text-xl">
            Create on Harbor X, connect your social channels and sell more merch
            by allowing your fans to shop exactly where they are.
          </p>
          <Button className="text-base md:text-2xl">
            Connect Now
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/sharesocial.jpg"
            alt="create"
            className="object-cover hidden md:block object-center h-full w-full"
          />
        </div>
      </div>
    </Shell>
  );
};

export default Share;
