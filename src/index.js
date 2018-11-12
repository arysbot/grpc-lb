const grpc = require('grpc');
const path = require('path');
const os = require('os');

const protoPath = path.join(__dirname, 'testing.proto');
const proto = grpc.load(protoPath).testing;
let client;

function clientDoStuff() {
    const dataToSend = {
        name: 'Carl',
        host: os.hostname()
    };

    client.doStuff(dataToSend, (error, response) => {
        if (error) {
            return console.log('An error occurred:', error);
        }

        console.log('Response:', JSON.stringify(response));
    });

    setTimeout(clientDoStuff, 2000);
}
// client
client = new proto.Stuff(`dns:///${process.env.RPC_HOST}:${process.env.RPC_PORT}`, grpc.credentials.createInsecure(), {
    'grpc.lb_policy_name': 'round_robin'
});

// begin doing stuff
clientDoStuff();
