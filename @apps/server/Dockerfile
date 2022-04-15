FROM node:16-alpine AS build

RUN mkdir /app
WORKDIR /app

COPY .yarn/cache .yarn/cache
COPY .yarn/plugins .yarn/plugins
COPY .yarn/releases .yarn/releases
COPY .yarnrc.yml .yarnrc.yml
COPY yarn.lock  yarn.lock
COPY package.json package.json
COPY packages/config packages/config
COPY packages/tsconfig packages/tsconfig
COPY apps/server/package.json apps/server/package.json

ENV NODE_ENV=production
RUN yarn workspaces focus @apps/server

COPY apps/server/tsconfig.json apps/server/tsconfig.json
COPY apps/server/src apps/server/src

RUN yarn workspace @apps/server build

CMD ["sh", "-c", "yarn workspace @apps/server start"]
