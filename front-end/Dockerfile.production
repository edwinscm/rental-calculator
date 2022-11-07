FROM node:16.18.0 AS build

WORKDIR /app

COPY package*.json ./

RUN yarn install --production

COPY . .

RUN yarn build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY ./nginx/templates/default.conf.template /etc/nginx/templates/

CMD ["nginx", "-g", "daemon off;"]