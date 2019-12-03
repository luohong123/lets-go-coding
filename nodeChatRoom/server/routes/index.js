var fs = require('fs');
var path = require('path');
var common = require('../core/common');
// 用户认证中间件
const JWT = require('jsonwebtoken');
const secret = 'chegi123456';
const algorithm = 'HS256';
const userInfoAdd = require('../db').userInfoAdd;
const getUserInfoByName = require('../db').getUserInfoByName;
const getUserInfoById = require('../db').getUserInfoById;
const loginValid = require('../db').loginValid;
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
// 注册
exports.register = function(req, res) {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  let person = {
    USERID: common.getGuid(),
    USERNAME: req.body.userName,
    PASSWORD: req.body.passWord
  };
  console.log(getUserInfoByName(person.USERNAME));
  if (getUserInfoByName(person.USERNAME)) {
    return res.send({
      message: '用户名已被占用, 请重新注册',
      code: '-1'
    });
  } else {
    userInfoAdd(person);
    res.status(200).send({
      message: '注册成功',
      code: '0'
    });
  }
};
// 登录
exports.login = function(req, res) {
  let person = {
    USERNAME: req.body.userName,
    PASSWORD: req.body.passWord
  };
  console.log(loginValid(person), 'loginValid');
  if (loginValid(person)) {
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
  } else {
    return res.status(200).send({
      code: '-1',
      message: '用户名或密码错误'
    });
  }
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
