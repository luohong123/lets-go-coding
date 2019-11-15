var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
app.get('/users', function(req, res){
  res.send('user');
});
io.on('connection', function(socket){
  console.log('XX进入了房间');
});
// 广播

http.listen(3000, function(){
  console.log('listening on *:3000');
});