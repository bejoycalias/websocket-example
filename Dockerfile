FROM node:10 as build

COPY . .
RUN npm i

EXPOSE 8443

CMD ["node", "index.js"]
