# 1er Stage: Build
FROM node:lts-alpine as BUILD

WORKDIR /build

COPY app-sample/package.json .

RUN npm install

COPY app-sample .

RUN npm run build --prod


# 2do Stage: Runtime

FROM nginx:1.21.3-alpine

COPY --from=BUILD /build/dist/app-sample/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"] 