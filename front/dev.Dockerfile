FROM node:alpine
WORKDIR /usr/frontend
COPY ./front/package*.json ./
RUN npm install 
COPY ./front/ ./
EXPOSE 4000
CMD npm run dev