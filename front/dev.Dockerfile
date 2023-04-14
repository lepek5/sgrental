FROM node:alpine
WORKDIR /usr/src/app
COPY ./package*.json ./
COPY ./ ./
RUN npm install 
EXPOSE 9000
CMD npm run dev