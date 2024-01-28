FROM node:18-alpine AS base
RUN apk update
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache python3 py3-pip

# The web Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update this Dockerfile, the Dockerfile in the web workspace and copy that over to Dockerfile in the docs.

FROM base AS builder
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
WORKDIR /app
RUN npm install -g pnpm@8.7.5
RUN pnpm add -g turbo
COPY . .
RUN turbo prune @repo/express-server --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm@8.7.5
WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm i

RUN pnpm turbo run build --filter=@repo/express-server...

FROM base AS runner

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm@8.7.5

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 express
RUN adduser --system --uid 1001 express
USER express
COPY --from=installer /app .

CMD cd apps/express-server/ && pnpm start