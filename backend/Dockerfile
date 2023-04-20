FROM node:alpine
WORKDIR /usr/src/app
COPY ./package*.json ./
COPY . .
RUN npm install
EXPOSE 9001
ENV NODE_ENV=development 
CMD npm run start