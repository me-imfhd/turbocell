type FooterNavProps = {
    title: string,
    items: {
        title: string,
        href: string,
        external: boolean
    }[]
}

export const SiteConfig = {
    footerNav: [
        {
            title: "Help",
            items: [
                {
                    title: "About",
                    href: "/about",
                    external: false
                },
                {
                    title:"Contact",
                    href:"/contact",
                    external:false
                },
                {
                    title:"Terms",
                    href:"/terms",
                    external:false
                },
                {
                    title:"Privacy",
                    href:"/privacy",
                    external:false
                }
            ]
        },
        {
            title: "Social",
            items: [
                {
                    title: "Github",
                    href: "/about",
                    external: true
                },
                {
                    title:"Discord",
                    href:"/contact",
                    external:true
                },
                {
                    title:"Linkedin",
                    href:"/terms",
                    external:true
                },
                {
                    title:"Twitter",
                    href:"/privacy",
                    external:true
                }
            ]
        },
        {
            title: "Categories",
            items: [
                {
                    title: "Men",
                    href: "/about",
                    external: false
                },
                {
                    title:"Women",
                    href:"/contact",
                    external:false
                },
                {
                    title:"Kids",
                    href:"/terms",
                    external:false
                },
                {
                    title:"Accessories",
                    href:"/privacy",
                    external:false
                }
            ]
        },
        {
            title: "Credits",
            items: [
                {
                    title: "Skateshop",
                    href: "/about",
                    external: true
                },
                {
                    title:"Shadcn/ui",
                    href:"/contact",
                    external:true
                }
            ]
        }
        
    ] satisfies FooterNavProps[]
}