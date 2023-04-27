FROM node:15-alpine AS frontend-builder

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS frontend-prod

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Expose port
EXPOSE 9000

COPY --from=frontend-builder /usr/src/app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]