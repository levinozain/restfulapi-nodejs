FROM node:20

#Working Dir

WORKDIR /usr/src/app

#copy packgae json file
COPY package*.json ./

#Install Module

RUN npm install

#copy source file

COPY . .

#Expose the API Port

EXPOSE 3000

CMD [ "node", "src/index.js"]