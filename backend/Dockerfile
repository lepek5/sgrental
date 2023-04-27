FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build
FROM node:alpine AS final
WORKDIR /usr/src/app
COPY --from=builder ./usr/src/app/dist ./dist
COPY ./package*.json .
RUN npm ci --only=production
ENV NODE_ENV=production
EXPOSE 9001
CMD ["node", "dist/index.js"]