import React from "react";
import { Shell } from "../shells/shell";
import { Button } from "../ui/button";

const Create = () => {
  return (
    <Shell as={"section"}>
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/products.jpg"
            alt="products"
            className="object-cover hidden md:block object-center h-full w-full"
          />
        </div>
        <div className="leading-10 text-2xl space-y-6 md:space-y-20 place-items-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Create physical and digital products. 
          </h2>
          <img
            src="/images/products.jpg"
            alt="create"
            className="object-cover  md:hidden object-center h-2/4 w-full"
          />
          <p className="text-sm md:text-xl">
            Customize over 180 physical products instantly, sell digital
            downloads, or create any custom product you can think of. You
            create, we’ll take care of fulfillment and the end-to-end fan
            experience.
          </p>
          <Button className="text-base md:text-2xl">Start Creating</Button>
        </div>
      </div>
    </Shell>
  );
};

export default Create;
