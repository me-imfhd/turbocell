"use client";

import * as React from "react";
// import { menComponents,kidComponents, womenComponents, accessoriesComponent } from "@/config/products";
import { cn } from "@harborx/utils/utils";
import { Icons } from "@harborx/utils/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@harborx/shadcn/ui";

export function MainNav() {
  return (
    <div className="hidden gap-6 lg:flex">
      <a
        aria-label="Home"
        href="/"
        className="hidden items-center space-x-2 lg:flex"
      >
        <Icons.star className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">Tee Harbor X</span>
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Icons.logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Tee Harbor X
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        This platform empowers creators to sell merchandise
                        through social media integration.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Products">
                  Stylish products for all, with quality and fashion for your
                  store.
                </ListItem>
                <ListItem href="/docs/installation" title="Stores">
                  Make your store and start selling now.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Github">
                  We are Open Source.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
