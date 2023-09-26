import { Icons } from "@/components/icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/THX.webp"
          alt="Stars"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <Link
          href="/"
          className="flex absolute left-8 top-6 z-20 items-center text-lg font-bold tracking-tighter"
        >
          <Icons.star className="mr-2 h-6 w-6" aria-hidden="true" />
          <span>Tee Harbor X</span>
        </Link>
        <div className="absolute bottom-6 left-8 z-20 line-clamp-1 text-base">
          Photo by{" "}
          <a
            href="https://unsplash.com/@mischievous_penguins"
            className="hover:underline"
          >
            Casey Horner
          </a>
          {" on "}
          <a
            href="https://unsplash.com/photos/OS2WODdxy1A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            className="hover:underline"
          >
            Unsplash
          </a>
        </div>
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
