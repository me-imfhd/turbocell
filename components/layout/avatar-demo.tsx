import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { SiteHeaderProps } from "./SiteHeader"
import { PropsWithChildren } from "react";

type AvartarDemoProps = SiteHeaderProps & {
    children: React.ReactNode
}
  
  export function AvatarDemo({user, children }:AvartarDemoProps  ) {
    return (
      <Avatar className="h-8 w-8">
        <AvatarImage src={user?.imageUrl} alt={user?.username ?? ""}/>
        <AvatarFallback>{children}</AvatarFallback>
      </Avatar>
    )
  }
  