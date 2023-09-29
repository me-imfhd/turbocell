import Image from "next/image";
import { Shell } from "../shells/shell";

export default function HowItWorksSection() {
  return (
    <Shell as={"section"}>
      <div className=" mx-auto">
        <div className="py-8 text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          How it works?
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-5">Create</h2>
            <p className=" leading-relaxed text-muted-foreground mt-2">
              Design your products and create and customize a custom store for
              free with Harbor X.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1204x504"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-5">Share</h2>
            <p className=" leading-relaxed text-muted-foreground mt-2">
              Connect your social accounts, promote your launch, and share your
              products with your people.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1205x505"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-5">Earn</h2>
            <p className=" leading-relaxed text-muted-foreground mt-2">
              Get the profit you deserve while we handle production, shipping,
              and customer support for you.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
