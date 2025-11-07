FROM node:18-alpine

WORKDIR /usr/src/app

# Copia package.json da raiz
COPY package*.json ./

RUN npm install

# Copia o código do app (servers.js)
COPY app/ .

EXPOSE 3000

CMD ["node", "servers.js"]
