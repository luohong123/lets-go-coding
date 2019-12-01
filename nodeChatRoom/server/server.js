/*
 * @Author: honghong
 * @Date: 2019-11-30 09:59:07
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-30 13:33:09
 * @Description: 
 * @email: 3300536651@qq.com
 */
var app = require('express')();
var path = require('path');
var http = require('http').createServer(app);
var myroute = require('./routes');
var port = 3000;
var io = require('socket.io')(http);
// socket
var socket = require('./core/socket.js');
socket.socket(io)
// 静态文件
// app.use('/static', app.static(path.join(__dirname, 'public')))
// 允许跨域
app.all('*', function (req, res, next) {
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
app.get('/', function (req, res) {
  res.send('<h1>Node聊天室</h1>');
});
// 登录
app.get('/login', myroute.login);
// 注册
app.get('/register', myroute.register);
// 退出登录
app.get('signout', myroute.signout);
// 消息列表
app.get('/messageList', myroute.messageList);
// 群消息
app.get('/groupinfo', myroute.getGroupInfo);
// 私聊
app.get('/getPrivateInfo', myroute.getPrivateInfo);
// 端口
http.listen(port, function () {
  console.log(`listening on *:${port}`);
});