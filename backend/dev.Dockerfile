FROM node:alpine
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 9001
ENV NODE_ENV=development 
CMD npm run dev