FROM node:18-alpine AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
COPY . .

RUN corepack enable pnpm &&\
    echo "store-dir=./.store-dir" >> .npmrc &&\
    echo "strict-peer-dependencies=false" >> .npmrc &&\
    echo "shamefully-hoist=true" >> .npmrc &&\
    pnpm dlx turbo prune --scope=wepig_fe_framework --docker

FROM base AS installer

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/.npmrc .npmrc
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN corepack enable pnpm &&\
    pnpm install --ignore-scripts &&\
    rm -f .npmrc

COPY --from=builder app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm build --filter=playground

FROM nginx:latest

COPY --from=installer /app/apps/playground/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]