FROM node:12-alpine

WORKDIR /home/node/app

COPY package.json yarn.lock ./
RUN yarn
COPY . .

CMD yarn serve --port $CLIENT_PORT