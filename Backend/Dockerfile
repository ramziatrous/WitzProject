

FROM node:18.16.1 as server-build
WORKDIR /root/

COPY  ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
