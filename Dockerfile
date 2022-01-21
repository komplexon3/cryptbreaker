FROM node:17.2-alpine as build
LABEL author="Marc Widmer <mwidmer@protonmail.com"
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build