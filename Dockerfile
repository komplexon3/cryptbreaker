FROM node:17.2-alpine as build
LABEL author="Marc Widmer <mwidmer@protonmail.com"
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]