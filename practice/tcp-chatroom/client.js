const net = require('net');

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
})

client.on('connect', ()=>{
  console.log('已经成功连接服务端');
  client.write('客户端说: world');

  process.stdin.on('data', data=> {
    data = data.toString().trim();
    client.write(data);
  })
})

client.on('data', data =>{
  console.log(data);
})
