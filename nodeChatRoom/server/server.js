var app = require('express')();
var fs = require('fs');
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
function getGuid() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});
app.get('/users', function(req, res) {
  res.send('user');
});
// 登录
app.get('login', function(req, res) {
  let userName = req.query.userName;
  let passWord = req.query.passWord;
});
// 注册
app.get('/register', function(req, res) {
  req.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let userName = req.query.userName;
  let passWord = req.query.passWord;
  let person = {
    id: getGuid(),
    userName: userName,
    passWord: passWord
  };
  fs.readFile(path.resolve(__dirname, './users.json'), function(err, data) {
    if (err) {
      return console.err(err);
    }
    let users = JSON.parse(data.toString());
    for (let i = 0; i < users.data.length; i++) {
      users.data.push(person);
    }
    let str = JSON.stringify(users);
    console.log(str);
    fs.writeFile(path.resolve(__dirname, './users.json'), str, function(err) {
      if (err) {
        console.log(err);
      }
      console.log('注册成功');
    });
  });
});
// 聊天内容
app.get('/chats', function(req, res) {
  let chats = [];
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(chats);
});
io.on('connection', function(socket) {
  console.log('有新用户连接');
  // 服务端接收来自客户端的消息
  socket.on('chat message', function(msg) {
    console.log('message:' + msg);
  });
});
// 广播

http.listen(3000, function() {
  console.log('listening on *:3000');
});
