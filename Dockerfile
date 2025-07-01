# Stage 1: build & prune deps
FROM node:20-alpine AS builder
WORKDIR /app

# install devs+prod deps, build SSR, then drop dev deps
COPY package.json package-lock.json
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production
