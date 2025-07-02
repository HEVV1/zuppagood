# STAGE 1: build & prune deps
FROM node:20-alpine AS builder
WORKDIR /app

# install dev+prod deps, build SSR, then drop dev deps
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production


# STAGE 2: runtime w/ nginx & node
FROM nginx:stable-alpine AS runtime

# install node runtime for runing SSR
RUN apk add --no-cache nodejs

# copy static browser files into nginx’s default html folder
COPY --from=builder /app/dist/zuppagood/browser      /usr/share/nginx/html

# copy server bundle + prod-only node_modules
COPY --from=builder /app/dist/zuppagood/server       /app/dist/zuppagood/server
COPY --from=builder /app/node_modules                /app/node_modules

# drop in our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /app
EXPOSE 80 443

# launch SSR + nginx in foreground
CMD ["sh","-c","node dist/zuppagood/server/main.server.mjs & nginx -g 'daemon off;'"]
