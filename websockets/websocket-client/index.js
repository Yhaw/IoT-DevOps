const WebSocket = require('ws');
require('dotenv').config();


var IP  = process.env.IP_ADDRESS;
var PORT = process.env.PORT;

 const ws = new WebSocket('ws://'+ IP +':'+ PORT);

ws.on('open', function open() {
  console.log('Connected to WebSocket server');
  ws.send('Hello, server!');
});

ws.on('message', function incoming(data) {
  console.log('Received message from server:', data);
});

ws.on('close', function close() {
  console.log('Disconnected from WebSocket server');
});
