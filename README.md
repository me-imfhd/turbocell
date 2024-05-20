<div align="center">
  <img src="https://pbs.twimg.com/profile_images/1584620135490338816/tCCcROZD_200x200.png" alt="logo" width="200" height="auto" />
  <h1>Turbocell</h1>
  <p>
    Load up turbocell and build a production grade web application instantly on vercel free plan.
  </p>
<!-- Badges -->
<p>
  <a href="https://github.com/me-imfhd/turbocell/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/me-imfhd/turbocell" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/me-imfhd/turbocell" alt="last update" />
  </a>
  <a href="https://github.com/me-imfhd/turbocell/network/members">
    <img src="https://img.shields.io/github/forks/me-imfhd/turbocell" alt="forks" />
  </a>
  <a href="https://github.com/me-imfhd/turbocell/stargazers">
    <img src="https://img.shields.io/github/stars/me-imfhd/turbocell" alt="stars" />
  </a>
  <a href="https://github.com/me-imfhd/turbocell/issues/">
    <img src="https://img.shields.io/github/issues/me-imfhd/turbocell" alt="open issues" />
  </a>
  <a href="https://github.com/me-imfhd/turbocell/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/me-imfhd/turbocell.svg" alt="license" />
  </a>
</p>
<h4>
    <a href="https://turbocell-web.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://turbocell-docs.vercel.app/">Documentation</a>
  <span> · </span>
    <a href="https://github.com/me-imfhd/turbocell/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/me-imfhd/turbocell/issues/">Request Feature</a>
  </h4>
</div>
<br />
<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Installation](#bangbang-installation)
  * [Run Locally](#running-run-locally)
- [Contact](#handshake-contact)

<!-- About the Project -->
## :star2: About the Project

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js - SSG, SSR, CSR</a></li>
    <li><a href="https://reactjs.org/">React.js - Client and Server Components</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
	<li><a href="https://tailwindcss.com/">ShadCN</a></li>
	<li><a href="https://tailwindcss.com/">Sooner Toasts</a></li>

  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://go.dev/">Node.js</a></li>
    <li><a href="https://nestjs.com/">Trpc</a></li>
    <li><a href="https://socket.io/">NextAuth</a></li>
    <li><a href="https://www.prisma.io/">Prisma ORM</a></li>    
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://redis.io/">Redis</a></li>
  </ul>
</details>

<details>
<summary>DevOps</summary>
  <ul>
    <li><a href="https://www.docker.com/">Docker</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- OAuth and Magic Links Login
- Cross Domain, Session Based, Cookie Authentication
- Rate Limiting with Upstash Redis
- Sonner Notifications on api interactions
- Error Monitoring with Sentry
- Analytics with Posthog
- Auto Generate Zod Schema for Prisma Database Schemas
- Dark Mode with next-themes and shadcn
- S3 for file upload
- Cloudfront CDNs for serving static content
- Tooling Workspace - Tailwind, TypeScript, ESLint, and GitHub Actions
- Independent implementation of functional APIs following MVC architecture
- Client, Server Components, Streaming with Suspense and Server Actions
- Trpc Router for Routing endpoint in complete type-safety
- Autogenerated Swagger pages with trpc-openapi

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Installation -->
### :bangbang: Installation

This project uses PNPM as package manager

```bash
 npm install --global pnpm
```

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/me-imfhd/turbocell.git
```

Go to the project directory

```bash
  cd turbocell
```

Own the template

```bash
  rm -rf .git
  git init
  git remote add origin main https://github.com/<your-user-id>/<your-empty-repo>
  git add .
  git commit -m "init"
  git push origin main
```

Install dependencies

```bash
  pnpm install
```

Start the local postgres database

```bash
  docker compose up -d
  cp .env.example .env
  pnpm db:push
```

Start developing

```bash
  pnpm dev
```

<!-- Contact -->
## :handshake: Contact

My Twitter & Email - [@mefhd2](https://twitter.com/mefhd2) - fahadahmad63862@gmail.com

Project Link: [https://github.com/me-imfhd/turbocell](https://github.com/me-imfhd/turbocell)
