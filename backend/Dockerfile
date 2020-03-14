FROM node:12

COPY package*.json ./
RUN npm install
COPY . ./

ENTRYPOINT [ "npm", "start" ]
EXPOSE 3001