FROM node:alpine AS backend-builder
WORKDIR /usr/src/app
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build
FROM node:alpine AS backend-prod
WORKDIR /usr/src/app
COPY --from=backend-builder ./usr/src/app/dist ./dist
COPY ./package*.json .
RUN npm ci --omit=dev
ENV NODE_ENV=production
EXPOSE 9001
CMD ["node", "dist/index.js"]