import { Icons } from "@/components/icons";

type FooterNavProps = {
  title: string;
  items: {
    title: string;
    href: string;
    external: boolean;
  }[];
};
type MySocialsProps = {
  title: string;
  href: string;
  external: boolean;
  icon: keyof typeof Icons;
};
export const Company = [
  {
    title: "About",
    href: "/about",
    external: false,
  },
  {
    title: "Privacy policy",
    href: "/privacy-policy",
    external: false,
  },
  {
    title: "Terms of service",
    href: "/terms",
    external: false,
  },
  {
    title: "Contact",
    href: "/contact",
    external: false,
  }
]
export const mySocials: MySocialsProps[] = [
  {
    title: "Github",
    href: "/github",
    external: true,
    icon: "gitHub",
  },
  {
    title: "Twitter",
    href: "/twitter",
    external: true,
    icon: "twitter",
  },
  {
    title: "Discord",
    href: "/discord",
    external: true,
    icon: "discord",
  },
];
export const SiteConfig = {
  footerNav: [
    {
      title: "Get Started",
      items: [
        {
          title: "Login",
          href: "/sign-in",
          external: false,
        },
        {
          title: "Start creating",
          href: "/store",
          external: false,
        },
        {
          title: "How it works",
          href: "/how",
          external: false,
        },
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
      ],
    },
    {
      title: "Categories",
      items: [
        {
          title: "Men",
          href: "/about",
          external: false,
        },
        {
          title: "Women",
          href: "/contact",
          external: false,
        },
        {
          title: "Kids",
          href: "/terms",
          external: false,
        },
        {
          title: "Accessories",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Integrations",
      items: [
        {
          title: "Instagram",
          href: "/about",
          external: false,
        },
        {
          title: "Youtube",
          href: "/contact",
          external: false,
        },
        {
          title: "Tiktok",
          href: "/terms",
          external: false,
        },
        {
          title: "Snapchat",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Credits",
      items: [
        {
          title: "Skateshop",
          href: "https://skateshop.sadmn.com/",
          external: true,
        },
        {
          title: "Shadcn/ui",
          href: "/contact",
          external: true,
        },
      ],
    },
    
  ] satisfies FooterNavProps[],
};
