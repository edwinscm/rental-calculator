FROM node:16.18.0 AS build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install --production

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx/templates/default.conf.template /etc/nginx/templates/

CMD ["nginx", "-g", "daemon off;"]