var fs = require('fs');
var path = require('path');
var common = require('../core/common');
// 解析body字段模块
const bodyParser = require('body-parser');
// 用户认证中间件
const JWT = require('jsonwebtoken');
const secret = 'chegi123456';
const algorithm = 'HS256';
function JWT_auth(req, res, next) {
  let authorization = req.headers['X-Token'];
  // 如果存在token
  console.log('X-Token', authorization);
  if (authorization)
    try {
      let token = authorization;
      JWT.verify(token, secret, { algorithm: 'HS256' }, (err, decoded) => {
        // 用户认证
        if (err) {
          console.log(err);
          next(err);
        } else {
          console.log(decoded);
          req.username = decoded.username; // 在 req 上添加 username,以便于传到下一个中间件取出 username 来查询数据库
          next();
        }
      });
    } catch (err) {
      res.status(401).send('未授权');
    }
  else res.status(401).send('未授权');
}
// 登录
exports.login = function(req, res) {
  //创建空字符叠加数据片段
  let data = '';

  //2.注册data事件接收数据（每当收到一段表单提交的数据，该方法会执行一次）
  req.on('data', function(chunk) {
    // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
    data += chunk;
  });
  console.log(data, 'req===========》');
  let person = {
    userName: req.query.userName,
    passWord: req.query.passWord
  };
  console.log(person, 'person');
  fs.readFile(path.resolve(__dirname, '../users.json'), function(err, data) {
    if (err) {
      return console.err(err);
    }
    let users = JSON.parse(data.toString());
    // 查找用户名和密码是否输入一致
    for (let i = 0; i < users.data.length; i++) {
      let everyone = users.data[i];
      console.log(person, 'person');
      if (
        person.userName &&
        person.passWord &&
        person.userName === everyone.userName &&
        person.passWord === everyone.passWord
      ) {
        // 授权方法 2. JWT
        let token = JWT.sign(
          { username: person.userName, exp: Date.now() + 1000 * 60 }, // payload
          secret, // 签名密钥
          { algorithm } // 签名算法
        );
        return res.status(200).send({
          code: '0',
          message: '登录成功',
          token: token,
          data: {
            userName: person.userName
          }
        });
      }
    }
    res.status(200).send({
      code: '-1',
      message: '用户名或密码错误'
    });
  });
};
// 注册
exports.register = function(req, res) {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.query);
  let person = {
    id: common.getGuid(),
    userName: req.query.userName,
    passWord: req.query.passWord
  };
  console.log(person, 'person');
  fs.readFile(path.resolve(__dirname, '../users.json'), function(err, data) {
    if (err) {
      return console.log(err);
    }
    let users = JSON.parse(data.toString());
    // 验证是否存在相同的用户, 如果存在提示用户名已被占用,请重新注册
    for (let i = 0; i < users.data.length; i++) {
      if (
        person.userName &&
        person.passWord &&
        users.data[i]['userName'] &&
        users.data[i]['userName'].indexOf(person.userName) !== -1
      ) {
        return res.send({
          message: '用户名已被占用, 请重新注册',
          code: '-1'
        });
      }
    }
    users.data.push(person);
    let str = JSON.stringify(users);
    fs.writeFile(path.resolve(__dirname, '../users.json'), str, function(err) {
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
};
// 登出
exports.signout = function(req, res) {
  req.session.destroy(() => console.log('销毁session，已经推出登录'));
  res.send({
    code: '0',
    message: '已登出'
  });
};
// 消息列表
exports.messageList = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile(path.resolve(__dirname, '../messageList.json'), function(
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
};

// 群聊
exports.getGroupInfo = function(req, res) {
  fs.readFile(path.resolve(__dirname, '../chats.json'), function(err, data) {
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
};
// 私聊
exports.getPrivateInfo = function(req, res) {};
