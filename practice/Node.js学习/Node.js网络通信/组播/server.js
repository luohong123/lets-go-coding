const dgram = require('dgram');

const server = dgram.createSocket('udp4')

server.on('listening', ()=> {
  const address = server.address();
  console.log(`server running`)
})