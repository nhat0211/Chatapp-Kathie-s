FROM node:18

WORKDIR /usr/src/app

COPY . .
RUN npm install 
RUN npm run build 

CMD npm start && ngrok http --domain=infinite-monthly-dodo.ngrok-free.app 3000

