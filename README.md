## repo

**Load the repo and build a production grade web application instantly.**

## Features Completed:

1. **Nextjs 13.5 App Router Implementation** - Upgraded to Next.js 13.5 for enhanced routing and server/client components.

2. **Express App** - Fully implemented Express app with routing and session-based-authentication implemented via express-session

3. **Next-auth OAuth Providers** - Enabled OAuth authentication with Next-auth for secure user logins.

4. **Trpc w/ App Router** - Implemented type-safe RPC with the App Router using fetch adapter.

5. **Dark Mode** - Added dark and light mode for a better user experience.

6. **Sonner** - Integrated user and developer-friendly toast notifications.

7. **Trpc Private and Public Procedure** - Replaced the need for basic trpc context for session details and added API protection.

8. **Prisma & Zod generator** - Used Prisma's type generator for type safety and enhanced API logic development.

9. **Functional Api Endpoints** - Separated business logic from trpc routers, promoting MVC architecture.

10. **Tooling workspace** - Managed tools like tailwind, eslint, and tsconfig separately from the packages workspace.

11. **Shadcn Integration** - Integrated the powerful Unstyled non-component UI library.

12. **12 workspace projects**
    - apps/web - nextjs 13.5 app router app
    - apps/express-server - a well implemented monorepo-based express app with session-based-authentication
    - packages/api - api-endpoint-logic, server, trpc
    - packages/auth - next-auth
    - packages/db - prisma and zod generators
    - packages/shadcn - unstyled UI library, radix UI, provides simplicity
    - packages/ui - components and layouts
    - packages/utils - shared utilities across projects
    - tooling/eslint - linting tool
    - tooling/typescript - tsconfigs
    - tooling/tailwind - tailwind config, global CSS, and CSS variables

### In Process:

1. Next-Auth Credentials Provider

### To do:

1. Docs
2. Feature for switching between light and dark mode both
3. Fix Bugs and Issues
