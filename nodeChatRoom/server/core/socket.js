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

// 客户端=》向服务端发送事件 enter进入 leave离开 sendMessage发送消息
// 系统消息 systemMessage
// 服务端=》向客户端发送事件 broadMessage广播消息 broadWhoEnter群通知谁进入、群broadWhoLeave
exports.socket = (io) => {
    let clientUsers = [];

    io.on('connection', (socket) => {
        clientUsers.push(socket);
        var addedUser = false;
        console.log('有新用户连接');
        // 服务端接收来自客户端的消息
        systemMessage = {
            newUser: '',
            leaveUser: '',
            online: 0
        };
        socket.on('addUser', username => {
            if (addedUser) return;
            // we store the username in the socket session for this client
            socket.username = username;
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
        socket.on('leave', (name) => {
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
            Object.defineProperty(chatsone, 'id', {
                enumerable: true,
                configurable: true,
                writable: true,
                value: getGuid()
            });
            fs.readFile(path.resolve(__dirname, './chats.json'), function (err, data) {
                if (err) {
                    return console.log(err);
                }
                let chats = JSON.parse(data);
                chats.data.push(chatsone);
                // 新增一条消息
                fs.writeFile(
                    path.resolve(__dirname, './chats.json'),
                    JSON.stringify(chats),
                    function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log(msg, 'msg');
                        socket.emit('login', {
                            numUsers: numUsers
                        });
                        socket.emit('new message', msg);
                        // 所有的socket连接都会被保存在某个变量（列表）中（具体是什么需要你自己查），你可以定时轮训这个列表，
                        // 然后向具体的连接发送数据。
                        // 如果不想重复发送的话，你可以维护一个缓存列表，记录是否已经发送过，发现已经发送就不再发了
                        // console.log(clientUsers, '已连接的users');
                    }
                );
            });
        });
        // 客户端重复累加接收 有两个解决方案：1. 根据客户机的原始地址进行路由 2.基于cookie路由客户端 https://socket.io/docs/using-multiple-nodes/
        socket.on('disconnect', function () {
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
}
// io.on('connection', (socket) => {
//     clientUsers.push(socket);
//     var addedUser = false;
//     console.log('有新用户连接');
//     // 服务端接收来自客户端的消息
//     systemMessage = {
//         newUser: '',
//         leaveUser: '',
//         online: 0
//     };
//     socket.on('addUser', username => {
//         if (addedUser) return;
//         // we store the username in the socket session for this client
//         socket.username = username;
//         ++numUsers;
//         addedUser = true;
//         socket.emit('login', {
//             numUsers: numUsers
//         });
//         // echo globally (all clients) that a person has connected
//         socket.broadcast.emit('userJoined', {
//             username: socket.username,
//             numUsers: numUsers
//         });
//     });
//     // 退出登录，广播谁离开了房间
//     socket.on('leave', (name) => {
//         let index;
//         for (let i = 0; i < clientUsers.length; i++) {
//             console.log(clientUsers, 'users[i]');
//             if (clientUsers[i] && clientUsers[i].indexOf(name) > -1) {
//                 index = i;
//                 clientUsers.splice(index, 1);
//             }
//         }
//         // 通知其他人
//         systemMessage.leaveUser = name;
//         io.emit('system', systemMessage);
//     });
//     // 接收消息后，发送群消息
//     socket.on('new message', msg => {
//         let chatsone = msg;
//         Object.defineProperty(chatsone, 'id', {
//             enumerable: true,
//             configurable: true,
//             writable: true,
//             value: getGuid()
//         });
//         fs.readFile(path.resolve(__dirname, './chats.json'), function (err, data) {
//             if (err) {
//                 return console.log(err);
//             }
//             let chats = JSON.parse(data);
//             chats.data.push(chatsone);
//             // 新增一条消息
//             fs.writeFile(
//                 path.resolve(__dirname, './chats.json'),
//                 JSON.stringify(chats),
//                 function (err) {
//                     if (err) {
//                         return console.log(err);
//                     }
//                     console.log(msg, 'msg');
//                     socket.emit('login', {
//                         numUsers: numUsers
//                     });
//                     socket.emit('new message', msg);
//                     // 所有的socket连接都会被保存在某个变量（列表）中（具体是什么需要你自己查），你可以定时轮训这个列表，
//                     // 然后向具体的连接发送数据。
//                     // 如果不想重复发送的话，你可以维护一个缓存列表，记录是否已经发送过，发现已经发送就不再发了
//                     // console.log(clientUsers, '已连接的users');
//                 }
//             );
//         });
//     });
//     // 客户端重复累加接收 有两个解决方案：1. 根据客户机的原始地址进行路由 2.基于cookie路由客户端 https://socket.io/docs/using-multiple-nodes/
//     socket.on('disconnect', function () {
//         if (addedUser) {
//             --numUsers;
//             // 在全局范围内回显此客户端已离开
//             socket.broadcast.emit('userLeft', {
//                 username: socket.username,
//                 numUsers: numUsers
//             });
//         }
//     });
// });