var app = require('express')();
var fs = require('fs');
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var UUID = require('uuid');
const users = [];

function getGuid() {
  return UUID.v1();
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
  let person = {
    userName: req.query.userName,
    passWord: req.query.passWord
  };
  fs.readFile(path.resolve(__dirname, './users.json'), function(err, data) {
    if (err) {
      return console.err(err);
    }
    let users = JSON.parse(data.toString());
    // 查找用户名和密码是否输入一致
    for (let i = 0; i < users.data.length; i++) {
      let everyone = users.data[i];
      console.log(person, 'person');
      if (
        person.userName === everyone.userName &&
        person.passWord === everyone.passWord
      ) {
        return res.status(200).send({
          message: '登录成功',
          userName: person.userName,
          code: '0'
        });
      }
    }
    res.status(200).send({
      code: '-1',
      message: '用户名或密码错误'
    });
  });
});
// 退出登录
app.get('signout', function(req, res) {});
// 注册
app.get('/register', function(req, res) {
  let userName = req.query.userName;
  let passWord = req.query.passWord;
  res.setHeader('Access-Control-Allow-Origin', '*');
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
      if (users.data[i]['userName'].indexOf(person.userName) !== -1) {
        return res.send({
          message: '用户名已被占用, 请重新注册',
          code: '-1'
        });
      }
    }
    users.data.push(person);
    let str = JSON.stringify(users);
    fs.writeFile(path.resolve(__dirname, './users.json'), str, function(err) {
      if (err) {
        console.log(err);
      }
      console.log('注册成功');
      res.status(200).send({
        message: '注册成功',
        code: '0'
      });
    });
  });
});
// 聊天内容
app.get('/chats', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile(path.resolve(__dirname, './chats.json'), function(err, data) {
    if (err) {
      return console.log(err);
    }
    let chats = JSON.parse(data);
    res.status(200).send({
      message: '请求成功',
      data: chats.data,
      code: '0'
    });
  });
});
// 客户端=》向服务端发送事件 enter进入 leave离开 sendMessage发送消息
// 系统消息 systemMessage
// 服务端=》向客户端发送事件 broadMessage广播消息 broadWhoEnter群通知谁进入、群broadWhoLeave
io.on('connection', function(socket) {
  console.log('有新用户连接');
  // 服务端接收来自客户端的消息
  systemMessage = {
    newUser: '',
    leaveUser: '',
    online: 0
  };
  // 游客身份

  // 登录，群通知谁进入了房间
  socket.on('login', function(nickname) {
    if (users.indexOf(nickname) > -1) {
      socket.emit('nickExisted');
    } else {
      socket.userIndex = users.length;
      socket.nickname = nickname;
      // 新增在线人数
      users.push(nickname);
      socket.emit('loginSuccess');
      // 在线人数
      systemMessage.newUser = nickname;
      console.log(systemMessage, 'systemMessage');
      io.emit('system', systemMessage); //向所有连接到服务器的客户端发送当前登陆用户的昵称
      // 给自己也发一份
      io.emit('system', systemMessage);
    }
  });
  // 退出登录，广播谁离开了房间
  socket.on('leave', function(name) {
    let index;
    for (let i = 0; i < users.length; i++) {
      console.log(users, 'users[i]');
      if (users[i] && users[i].indexOf(name) > -1) {
        index = i;
        users.splice(index, 1);
      }
    }
    // 通知其他人
    systemMessage.leaveUser = name;
    io.emit('system', systemMessage);
  });
  // 接收消息后，发送群消息
  socket.on('sendMessage', function(msg) {
    let chatsone;
    if (msg == null) {
      return;
    } else {
      chatsone = msg;
      Object.defineProperty(chatsone, 'id', {
        enumerable: true,
        configurable: true,
        writable: true,
        value: getGuid()
      });
      console.log(chatsone, 'chatsone');
      fs.readFile(path.resolve(__dirname, './chats.json'), function(err, data) {
        if (err) {
          return console.log(err);
        }
        let chats = JSON.parse(data);
        chats.data.push(chatsone);
        // 新增一条消息
        fs.writeFile(
          path.resolve(__dirname, './chats.json'),
          JSON.stringify(chats),
          function(err) {
            if (err) {
              return console.log(err);
            }
            io.emit('broadMessage', msg);
          }
        );
      });
    }
  });
});
// 广播

http.listen(3000, function() {
  console.log('listening on *:3000');
});
