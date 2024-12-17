FROM node:18

WORKDIR /src/

COPY package*.json ./

RUN npm install -g npm@10.8.3

RUN npm install

RUN npx tsc

COPY . .

EXPOSE 3000

CMD ["npm", "start"]