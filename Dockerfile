FROM node:20-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY ./package.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["node", "dist/zuppagood/server/main.server.mjs"]
