FROM node:8

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run

CMD node ./src/server.js

EXPOSE 3000