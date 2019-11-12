const net = require('net');

const server = net.createServer();
const clients = [];
server.on('connection', clientSocket => {
  // 把当前连接的客户端通信接口存储到数据中
  clients.push(clientSocket);
  console.log('有新的连接进来');
  clientSocket.on('data', data=>{
    console.log(data.toString());
    // 群发消息
    clients.forEach(socket => {
      if(socket !== clientSocket) {
        socket.write(data);
      }
    })
  })
  clientSocket.write('服务端说:hello');
})
server.listen(3000, ()=> console.log('Server run 127.0.0.1 3000'));