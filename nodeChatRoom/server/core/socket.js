/*
 * @Author: honghong
 * @Date: 2019-11-30 11:54:34
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-30 13:48:29
 * @Description: 
 * @email: 3300536651@qq.com
 */
var path = require('path');
var fs = require('fs');
var _historyCreate = require('../db').historyCreate;
var _messageIsRepeat = require('../db').messageIsRepeat;
var common = require('../core/common');
var _onlineStateUpdate = require('../db').onlineStateUpdate;
// 客户端=》向服务端发送事件 enter进入 leave离开 sendMessage发送消息
// 系统消息 systemMessage
// 服务端=》向客户端发送事件 broadMessage广播消息 broadWhoEnter群通知谁进入、群broadWhoLeave
// Chatroom

var userInfo = {

};
exports.socketChat = function (io) {
    io.on('connection', (socket) => {
        console.log('连接成功=====》');
        // 用户是否进入
        let addedUser = false;
        // 当客户端发出 'new message' 时，它将侦听并执行
        socket.on('new message', (data) => {
            // we tell the client to execute 'new message'
            let message = {
                MESSAGEID: common.getGuid(),
                GROUPID: data.GROUPID,
                FROMUSERID: data.FROMUSERID,
                TOUSERID: data.TOUSERID,
                CONTENT: data.CONTENT,
                TIME: data.TIME,
                TS: data.TS, // 去重  
                AVATAR: data.AVATAR,
                USERNAME: data.USERNAME
            }
            // 新增历史消息
            _messageIsRepeat(message).then(res => {
                // 不能重复添加消息
                if (!res) {
                    _historyCreate(message).then(result => {
                        // 通知其他人
                    })
                }
            });
            socket.broadcast.emit('new message', {
                username: socket.username,
                message: message
            });
            // 通知自己
            socket.emit('new message', {
                username: socket.username,
                message: message
            })
        });

        // 当客户端发出 'add user'时，它将侦听并执行
        socket.on('add user', (username) => {
            console.log(addedUser,'addedUser');
            if (addedUser) return;
            // we store the username in the socket session for this client
            socket.username = username;
            console.log(socket.username, '===socket.username');
            addedUser = true;
            // 修改用户在线状态
            userInfo = {
                USERNAME: socket.username,
                ONLINESTATE: 'Y'
            };
            _onlineStateUpdate(userInfo);
            // // echo globally (all clients) that a person has connected
            // socket.broadcast.emit('user joined', {
            //     username: socket.username,
            // });
        });

        // when the client emits 'typing', we broadcast it to others
        socket.on('typing', () => {
            socket.broadcast.emit('typing', {
                username: socket.username
            });
        });

        // when the client emits 'stop typing', we broadcast it to others
        socket.on('stop typing', () => {
            socket.broadcast.emit('stop typing', {
                username: socket.username
            });
        });
        // 当用户退出登录时,设置为不在线
        socket.on('user leave', (username) => {
            // 修改用户在线状态
            userInfo = {
                USERNAME: username,
                ONLINESTATE: 'N'
            };
            _onlineStateUpdate(userInfo);
            // 设置用户离开
            addedUser = false;
        })
        // 当用户断开连接时,执行此操作
        socket.on('disconnect', () => {
            console.log('disconnect', '已经断开连接=========>');
            if (addedUser) {
                // echo globally that this client has left
                console.log('107行代码==')
                socket.broadcast.emit('user leave', {
                    username: socket.username,
                });
                // 修改用户在线状态,当用户断开连接时,修改为不在线
                userInfo = {
                    USERNAME: socket.username,
                    ONLINESTATE: 'N'
                };
                _onlineStateUpdate(userInfo);
            }
        });
    });
}
