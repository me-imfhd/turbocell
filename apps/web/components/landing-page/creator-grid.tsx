import React from "react";
import { Shell } from "../shells/shell";
import { Button } from "../ui/button";

const CreatorGrid = () => {
  return (
    <Shell as={"section"}>
      <div className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
        Top Creators on Harbor X
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator1.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Pewdiepie's store</Button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator2.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Melinas's store</Button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator3.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Harry's store</Button>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator4.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Shauna's store</Button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator1.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Peepepupu's store</Button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator2.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Pewdiepie's store</Button>
            </div>
          </div>
        </div>
        <div className="gap-4 hidden md:grid">
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator3.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Pewdiepie's store</Button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator4.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Pewdiepie's store</Button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="h-full object-cover object-center hover: max-w-full rounded-lg"
              src="/images/creator3.jpg"
              alt=""
            />
            <div className="absolute h-full w-full bg-background/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button className=" py-2 px-5">Visit Pewdiepie's store</Button>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default CreatorGrid;
