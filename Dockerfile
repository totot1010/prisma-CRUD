FROM node:16.14.0-alpine
WORKDIR /

RUN apk update && apk add bash

COPY package*.json ./

RUN npm install

EXPOSE 18080

CMD npm start
