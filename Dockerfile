# Use a imagem oficial do Node.js como base
FROM node:10

RUN mkdir -p C:/Users/emyle/OneDrive/Área de Trabalho/TRABALHO-WEB\login-page\src && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

#Exposto na porta 8080
EXPOSE 8080

# Comando para iniciar o node quando o contêiner for executado
CMD [ "node", "app.js" ]

# # Build da aplicação Node.js 'npm start'
# RUN npm run build

