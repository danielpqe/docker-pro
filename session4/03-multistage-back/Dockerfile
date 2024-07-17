# 1er Stage: Build
FROM node:lts-alpine as BUILD

WORKDIR /build

COPY package.json .

RUN npm install

COPY . .

RUN npm run build 

# 2do Stage: Runtime

FROM node:lts-alpine

WORKDIR /app

COPY --from=BUILD /build/package.json .

COPY --from=BUILD /build/node_modules ./node_modules

COPY --from=BUILD /build/cache ./cache

CMD ["npm", "run", "start"] 