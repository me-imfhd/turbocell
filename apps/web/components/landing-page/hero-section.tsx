import React from 'react'
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32 bg-background ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Create Products. Engage Fans. Make Money.
                </h1>
                <p className="max-w-[600px] text-muted-foreground mx-auto ">
                  Turn your ideas into physical and digital products that your
                  fans will love.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-background  bg-opacity-50 rounded-full">
                      <Icons.edit />
                    </div>
                    <h2 className="text-base md:text-xl font-bold text-white">
                      Create physical & digital products
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Customize 180+ products, sell digital items, or create
                      custom goods. We manage fulfillment and the entire fan
                      experience.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-background  bg-opacity-50 rounded-full">
                      <Icons.send />
                    </div>
                    <h2 className="text-base md:text-xl font-bold text-white">
                      Launch a Free Store
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Sell products in your personalized, conversion-optimized
                      store. Connect a custom domain and be ready to promote in
                      minutes.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-background  bg-opacity-50 rounded-full">
                      <Icons.wallet />
                    </div>
                    <h2 className="text-base md:text-xl font-bold text-white">
                      Sell More Merch
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Create on Harbor X, connect your social channels and sell
                      more merch by allowing your fans to shop exactly where
                      they are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild size={"lg"} className="text-xl" variant={"default"}>
              <Link href={"/create"}>Start Creating, its free</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}

export default HeroSection