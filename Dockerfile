ARG NODE_VERSION=21.1.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD npm run start:dev
