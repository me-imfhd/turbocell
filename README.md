## Turbocell

**Load the turbocell and build a production grade web application instantly.**

## Features :

1. **Turborepo** - Used turbo repo for building project across the monorepo seamlessly with benifits like caching and ease deployement.

2. **Docker** - Used to deploy seperate apps seperately with the help of turbo

3. **Nextjs 14 App Router Implementation** - Upgraded to Next.js 14 app router for enhanced routing and server/client components.

4. **Next-auth OAuth Providers** - Enabled OAuth authentication with Next-auth for secure user logins.

5. **Trpc Router w/ App Router** - Implemented type-safe RPC Api routing and fronted routing with Nextjs App Router.

6. **Trpc Procedures, Contexts** - Protect and Router your apis with private procedures and access native http request and response objects with contexts.

7. **Dark Mode** - Added dark and light mode for a better user experience.

8. **Sonner** - Integrated user and developer-friendly toast notifications.

9. **AWS S3 & Cloudfront** - Used to upload image to S3 and serve them via cloudfront CDN, with full protection.

10. **Upstash Rate Limiter** - Rate Limiting for your application

11. **Sentry** - Track Errors in your applications through a dashboard

12. **Posthog** - Product Analytics for your application

13. **Cross-Domain Authentication** - Login in one application get logged in respectives sub domains of main domain automatically with same sessions

14. **Postgres Database & Prisma ORM & AutoGen Zod Schema generator** - Used Prisma's type generator for type safety and enhanced API logic development.

15. **Functional Api Endpoints** - Separated business logic from trpc routers, promoting MVC architecture.

16. **Tooling workspace** - Managed tools like tailwind, eslint, and tsconfig separately from the packages workspace.

17. **Shadcn Integration** - Integrated the powerful Unstyled non-component UI library.

18. **Github Actions**

## Project Structure:
   **11 workspace projects**
    - apps/web - nextjs 14 app router app
    - apps/dashboard - nextjs 14 app router app
    - packages/api - isolated interfaces and implementation of functional APIs
    - packages/auth - next-auth
    - packages/db - prisma and zod generators
    - packages/shadcn - unstyled UI library, radix UI, provides simplicity
    - packages/ui - resuable ui components and layouts
    - tooling/eslint - linting tool
    - tooling/typescript - tsconfigs
    - tooling/tailwind - tailwind config, global CSS, and CSS variables
    - tooling/github-actions - github actions
