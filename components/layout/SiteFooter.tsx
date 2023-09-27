import React from "react";
import { Shell } from "../shells/shell";
import { Icons } from "../icons";
import Link from "next/link";
import { SiteConfig } from "@/config/site";

const SiteFooter = () => {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as={"div"}>
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link href={"/"} className="flex items-center space-x-2">
              <Icons.star className="h-6 w-6" />
              <span className="font-bold ">Tee Harbor X</span>
            </Link>
          </section>
          <section className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-4">
            {SiteConfig.footerNav.map((item) => (
              <div className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-3">
                  {
                    item.items.map((link)=>(
                      <li>
                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.title} <span className="sr-only">{link.title}</span></Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))}
          </section>
        </section>
      </Shell>
    </footer>
  );
};

export default SiteFooter;
