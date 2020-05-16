const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: process.env.WS_PORT || 8080,
  path: '/ws'
})
console.log(`WS Started`)

wss.on('connection', (ws) => {
  console.log('Connection received.')
  ws.send("Connection received");

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`)
  })
})

wss.on('error', (err) => {
  console.log('Error ' + err)
})

