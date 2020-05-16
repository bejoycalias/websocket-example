'use strict';

const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('./selfsigned.crt'),
  key: fs.readFileSync('./selfsigned.key')
  port: process.env.WS_PORT || 8443,
  path: '/ws'
});

const wss = new WebSocket.Server({ server });

console.log(`WS Started`)


const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Connection received.')
  ws.send("Connection received");

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`)
  })
})

server.listen(function listening() {
  const ws = new WebSocket(`wss://localhost:${server.address().port}`, {
    rejectUnauthorized: false
  });

  ws.on('open', function open() {
    ws.send('All glory to WebSockets!');
  });
});

wss.on('error', (err) => {
  console.log('Error ' + err)
})

