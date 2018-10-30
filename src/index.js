const grpc = require('grpc');
const path = require('path');
const os = require('os');

const protoPath = path.join(__dirname, 'testing.proto');
const proto = grpc.load(protoPath).testing;

let server;

function serverDoStuff(ctx, callback) {
    console.log(`Processing "doStuff" from "${ctx.request.host}"...`);
    callback(null, {
        message: `Hello, ${ctx.request.name}; hold on while I do things!`,
        host: os.hostname()
    });
}

server = new grpc.Server();
server.addService(proto.Stuff.service, {doStuff: serverDoStuff});
server.bind(`0.0.0.0:${process.env.RPC_PORT}`, grpc.ServerCredentials.createInsecure());
server.start();

console.log('Listening in server mode...');


