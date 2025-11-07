FROM node:18.20.3-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o código do monitor
COPY ./monitor/servers.js .

# Cria um package.json e instala as dependências necessárias
RUN npm init -y
RUN npm install express prom-client

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "servers.js"]
