var app = require('express')();
var fs = require('fs');
var path = require('path');
var http = require('http').createServer(app);
// 服务端
var io = require('socket.io')(http);
var UUID = require('uuid');
var times = 0;
const clientUsers = [];
var numUsers = 0;
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
// 消息列表
app.get('/messageList', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile(path.resolve(__dirname, './messageList.json'), function(
    err,
    data
  ) {
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
io.on('connection', socket => {
  clientUsers.push(socket);
  var addedUser = false;
  console.log('有新用户连接');
  // 服务端接收来自客户端的消息
  systemMessage = {
    newUser: '',
    leaveUser: '',
    online: 0
  };
  // 游客身份
  // 登录，群通知谁进入了房间
  // socket.on('login', (nickname) => {
  //   if (clientUsers.indexOf(nickname) > -1) {
  //     socket.emit('nickExisted');
  //   } else {
  //     socket.userIndex = clientUsers.length;
  //     socket.nickname = nickname;
  //     // 新增在线人数
  //     clientUsers.push(nickname);
  //     socket.emit('loginSuccess');
  //     // 在线人数
  //     systemMessage.newUser = nickname;
  //     console.log(systemMessage, 'systemMessage');
  //     io.emit('system', systemMessage); //向所有连接到服务器的客户端发送当前登陆用户的昵称
  //     // 给自己也发一份
  //     io.emit('system', systemMessage);
  //   }
  // });
  socket.on('addUser', username => {
    if (addedUser) return;
    // we store the username in the socket session for this client
    // socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('userJoined', {
      username: socket.username,
      numUsers: numUsers
    });
  });
  // 退出登录，广播谁离开了房间
  socket.on('leave', name => {
    let index;
    for (let i = 0; i < clientUsers.length; i++) {
      console.log(clientUsers, 'users[i]');
      if (clientUsers[i] && clientUsers[i].indexOf(name) > -1) {
        index = i;
        clientUsers.splice(index, 1);
      }
    }
    // 通知其他人
    systemMessage.leaveUser = name;
    io.emit('system', systemMessage);
  });
  // 接收消息后，发送群消息
  socket.on('new message', msg => {
    let chatsone = msg;
    console.log(socket.username, 'socket.username');
    Object.defineProperty(chatsone, 'id', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: getGuid()
    });
    socket.emit('login', {
      numUsers: numUsers
    });
    // 通知他人
    socket.broadcast.emit('new message', msg);
    // 通知自己
    socket.emit('new message', msg);
    fs.readFile(path.resolve(__dirname, './chats.json'), (err, data) => {
      if (err) {
        return console.log(err);
      }
      let chats;
      chats = JSON.parse(data);
      chats.data.push(chatsone);
      // 新增一条消息
      fs.writeFile(
        path.resolve(__dirname, './chats.json'),
        JSON.stringify(chats),
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log(msg, 'msg');

          // socket.broadcast.emit('new message', msg);
          // 所有的socket连接都会被保存在某个变量（列表）中（具体是什么需要你自己查），你可以定时轮训这个列表，
          // 然后向具体的连接发送数据。
          // 如果不想重复发送的话，你可以维护一个缓存列表，记录是否已经发送过，发现已经发送就不再发了
          // console.log(clientUsers, '已连接的users');
        }
      );
    });
  });
  // 当客户端出现打字时,我们将其广播给其他人
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });
  // 当客户发出“停止键入”时，我们会将其广播给其他人
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });
  // 客户端重复累加接收 有两个解决方案：1. 根据客户机的原始地址进行路由 2.基于cookie路由客户端 https://socket.io/docs/using-multiple-nodes/
  socket.on('disconnect', function() {
    if (addedUser) {
      --numUsers;
      // 在全局范围内回显此客户端已离开
      socket.broadcast.emit('userLeft', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
// 广播

http.listen(3000, function() {
  console.log('listening on *:3000');
});
