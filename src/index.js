const grpc = require('grpc');
const path = require('path');
const os = require('os');

const protoPath = path.join(__dirname, '../node_modules/protofiles/src/Logger.proto');
const proto = grpc.load(protoPath);

let server;

function serverDoStuff(ctx, callback) {
    console.log(ctx.request);
    callback(null, {});
}

server = new grpc.Server();
server.addService(proto.Logger.service, {Log: serverDoStuff});
server.bind(`127.0.0.1:8881`, grpc.ServerCredentials.createInsecure());
server.start();

console.log('Listening in server mode...');


