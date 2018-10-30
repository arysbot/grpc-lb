FROM node:10.12.0-jessie

ARG RPC_TYPE

ENV RPC_TYPE=${RPC_TYPE}

RUN npm install

CMD ["node", "index.js"]
