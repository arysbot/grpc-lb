FROM node:10.12.0-jessie

ARG RPC_TYPE

ENV RPC_TYPE=${RPC_TYPE}

COPY . /app

WORKDIR /app

CMD ["ls"]

RUN npm install

CMD ["ls"]

CMD ["node", "index.js"]
