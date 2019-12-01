var fs = require('fs');
var path = require('path');
var common = require('../core/common');
// 登录
exports.login = function (req, res) {
    let person = {
        userName: req.query.userName,
        passWord: req.query.passWord
    };
    fs.readFile(path.resolve(__dirname, '../users.json'), function (err, data) {
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
}
// 注册
exports.register = function (req, res) {
    let userName = req.query.userName;
    let passWord = req.query.passWord;
    res.setHeader('Access-Control-Allow-Origin', '*');
    let person = {
        id: common.getGuid(),
        userName: userName,
        passWord: passWord
    };
    console.log(person, 'person')
    console.log(req, 'req')
    fs.readFile(path.resolve(__dirname, '../users.json'), function (err, data) {
        if (err) {
            return console.log(err);
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
        fs.writeFile(path.resolve(__dirname, '../users.json'), str, function (err) {
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
}
// 登出
exports.signout = function (req, res) {

}
// 消息列表
exports.messageList = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    fs.readFile(path.resolve(__dirname, '../messageList.json'), function (err, data) {
        if (err) {
            return console.log(err);
        }
        let chats = JSON.parse(data);
        res.status(200).send({
            message: '请求成功',
            data: chats.data,
            code: '0'
        });
    })
}

// 群聊
exports.getGroupInfo = function (req, res) {
    fs.readFile(path.resolve(__dirname, '../chats.json'), function (err, data) {
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
}
// 私聊
exports.getPrivateInfo = function (req, res) {

}