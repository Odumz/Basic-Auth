# build stage
FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9000
CMD [ "http-server", "dist" ]
# CMD ["nodemon", "--exec", "npm", "run", "start"]
