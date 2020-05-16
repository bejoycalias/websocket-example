FROM node:10 as build

COPY . .
RUN npm i

EXPOSE 8080

CMD ["node", "index.js"]
