FROM node:15-alpine AS builder

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf *

# Expose port
EXPOSE 9000

COPY --from=builder /usr/src/app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]