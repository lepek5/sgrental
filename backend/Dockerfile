FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 9001
ENV NODE_ENV=production
CMD ["npm", "run", "start"]