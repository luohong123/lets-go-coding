const net = require('net');
const server = net.createServer();

server.on('connection', clientSocket => {
  console.log('有新的连接进来了')

  // 监听 clientSocket 的 data 事件
  clientSocket.on('data', data => {
    console.log("客户端说:"+data.toString());
  })
  // 通过 clientSocket 给当前连接的客户端发送数据
  clientSocket.write('hello');
})

server.listen(3000, ()=> console.log('Server running 127.0.0.1 3000'))