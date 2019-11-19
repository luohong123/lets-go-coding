var app = require('express')();
var fs = require('fs');
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
function getGuid() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
// 允许跨域
app.all('*', function(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  if (req.method.toLowerCase() == 'options') res.send(200);
  //让options尝试请求快速结束
  else next();
});

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});
app.get('/users', function(req, res) {});
// 登录
app.get('/login', function(req, res) {
  let userName = req.query.userName;
  let passWord = req.query.passWord;
  fs.readFile(path.resolve(__dirname, './users.json'), function(err, data) {
    if (err) {
      return console.err(err);
    }
    let users = JSON.parse(data.toString());
    // 查找用户名和密码是否输入一致
    for (let i = 0; i < users.data.length; i++) {
      let everyone = users.data[i];
      if (userName === everyone.userName && passWord === everyone.passWord) {
        res.status(200).send({
          message: '登录成功',
          code: 0 
        });
      } else {
        res.status(200).send({
          code: -1,
          message: '用户名或密码错误'
        });
      }
    }
  });
});
// 注册
app.get('/register', function(req, res) {
  let userName = req.query.userName;
  let passWord = req.query.passWord;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  console.log(req.query, 'req.query');
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
    console.log(users, 'users');
    // 验证是否存在相同的用户, 如果存在提示用户名已被占用,请重新注册
    for (let i = 0; i < users.data.length; i++) {
      if (users.data[i]['userName'].indexOf(userName) == -1) {
        return res.send('用户名已被占用, 请重新注册');
      }
    }
    users.data.push(person);
    let str = JSON.stringify(users);
    fs.writeFile(path.resolve(__dirname, './users.json'), str, function(err) {
      if (err) {
        console.log(err);
      }
      console.log('注册成功');
      res.send('注册成功');
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
