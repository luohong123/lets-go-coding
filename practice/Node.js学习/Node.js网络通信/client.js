const net = require('net');

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
})

client.on('connect', () => {
  console.log('成功的连接到服务器11');
  // 当客户端与服务端建立连接成功以后，客户端就可以给服务端
  client.write('world');

  // 当客户端与服务端连接成功之后，我可以监听终端的输入
  // 获取终端的输入发送给服务端
  process.stdin.on('data', data => {
    console.log(data.toString());
    client.write(data.toString().trim());
  })
})

client.on('data', data => {
  console.log(data); // <Buffer 68 65 6c 6c 6f>
  console.log("服务端说:"+data.toString()); // 'hello'
})