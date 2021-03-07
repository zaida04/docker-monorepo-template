FROM node:14-alpine
LABEL name "Together Diary API"
LABEL version "1.0.0"

WORKDIR /usr/tdAPI

RUN apk add --update \
    && apk add --no-cache --virtual .build-deps curl
RUN curl -L https://unpkg.com/@pnpm/self-installer | node && apk del .build-deps

COPY tsconfig.json package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages packages/
COPY services/api/tsconfig.json services/api/package.json services/api/
ENV NODE_ENV="development"

RUN pnpm i --r
ENV NODE_ENV="production"
COPY services/api/src/ services/api/src/
RUN pnpm run build && pnpm prune --prod

CMD [ "node", "./services/api/dist/index.js"]
