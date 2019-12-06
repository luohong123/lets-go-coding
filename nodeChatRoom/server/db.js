var fs = require('fs');
var file = 'chat.db'; // 这里写的就是数据库文件的路径
var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);
const GROUPINFO = require('./models/groupinfo').obj;
const GROUPUSER = require('./models/groupuser').obj;
const HISTORY = require('./models/history').obj;
const OFFLINE = require('./models/offline').obj;
const USERINFO = require('./models/userinfo').obj;
const common = require('./core/common');
/**
 * 新增用户
 */
exports.userInfoAdd = function(data) {
  // 注册用户后加入默认的fe-free群
  db.run(
    `INSERT INTO USERINFO (USERID,USERCODE,USERNAME,PASSWORD,AVATAR,SEX,REMARK,ONLINESTATE,LASTONLINETIME,TS)
  VALUES (
    '${data.USERID}',
    '${data.USERCODE}',
    '${data.USERNAME}',
    '${data.PASSWORD}',
    '${data.AVATAR}',
    '${data.SEX}',
    '${data.REMARK}',
    '${data.ONLINESTATE}',
    '${data.LASTONLINETIME}',
    '${data.TS}'
    );
    INSERT INTO GROUPUSER (ID,GROUPID,USERID,STATE,JOINTIME,QUITTIME,TS)
    VALUES (
    '${common.getGuid()}',
    'c31091d0-1735-11ea-8132-7fd89f085ca9',
    '${data.USERID}',
    '',
    '${data.TS}',
    '',
    '${data.TS}'
    );   
    `,
    err => {
      if (err) throw err;
      console.log('新增用户成功,加入默认群成功');
    }
  );
};
/**
 * 根据USERNAME查询用户信息,用于用户名查重、登录验证
 */
exports.getUserInfoByName = function(userName) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM USERINFO WHERE USERNAME = '${userName}';`,
      (err, row) => {
        if (err) return reject(err);
        return resolve(row);
      }
    );
  });
};
/**
 * 验证用户名和密码是否输入一直
 */
exports.loginValid = function(userInfo) {
  let query = `SELECT * FROM USERINFO WHERE USERNAME = '${userInfo.USERNAME}' AND PASSWORD = '${userInfo.PASSWORD}'`;
  let promise = new Promise((resolve, reject) => {
    db.get(query, (err, row) => {
      if (err) return reject(err);
      return resolve(row);
    });
  });
  // .then 总是返回一个承诺
  return promise.then(result => {
    if (
      userInfo.USERNAME &&
      userInfo.PASSWORD &&
      result &&
      userInfo.USERNAME === result.USERNAME &&
      userInfo.PASSWORD === result.PASSWORD
    ) {
      return true;
    } else {
      return false;
    }
  });
};
/**
 * 创建新群
 */
exports.groupInfoAdd = function(data) {
  console.log(data, 'userInfo');
  // 操作多表: 群用户表新增一条数据 且 群用户表新增创建人
  let sql = `
  INSERT INTO GROUPINFO (GROUPID,GROUPNAME,GROUPREMARK,CREATEUSERID,CREATETIME,DISSOLUTIONTIME,GROUPSTATE,AVATAR,TS)
  VALUES (
    '${data.GROUPID}',
    '${data.GROUPNAME}',
    '${data.GROUPREMARK}',
    '${data.CREATEUSERID}',
    '${data.CREATETIME}',
    '${data.DISSOLUTIONTIME}',
    '${data.GROUPSTATE}',
    '${data.AVATAR}',
    '${data.TS}'
    );
  INSERT INTO GROUPUSER (ID,GROUPID,USERID,STATE,JOINTIME,QUITTIME,TS)
  VALUES (
    '${common.getGuid()}',
    '${data.GROUPID}',
    '${data.CREATEUSERID}',
    '0',
    '${data.CREATETIME}',
    '',
    '${data.TS}'
    );

  `;
  return new Promise((resolve, reject) => {
    db.exec(sql, err => {
      if (err) return reject(err);
      return resolve({
        code: '0',
        message: '新增群成功和设置创建人为群用户成功'
      });
    });
  });
};
/**
 * 根据群ID查询群用户
 */
exports.getGroupUsersById = function(groupInfo) {
  let query = `SELECT * FROM GROUPUSER WHERE GROUPID = '${groupInfo.GROUPID}'`;
  return new Promise((resolve, reject) => {
    db.get(query, (err, row) => {
      if (err) return reject(err);
      return resolve(row);
    });
  });
};
/**
 * 根据群ID查询群信息
 */
exports.getGroupInfoById = function(groupId) {
  let sql = `
    SELECT * FROM GROUPINFO WHERE GROUPID = '${groupId}'
  `;
  return new Promise((resolve, reject) => {
    db.get(sql, (err, row) => {
      if (err) return reject(err);
      console.log(row,'getGroupInfoById');
      return resolve(row);
    });
  });
};
// 获取消息列表
exports.getMessageList = function(userId) {
  // 返回 消息标题(群ID、群名称、私聊时对方的姓名和ID)、历史记录表中最近消息的时间、
  let sql,
    groupsSql,
    historySql,
    groups = [], // 群聊
    privateChats = [],
    messages = []; // {groupId: string,groupName: string, latestTime:string, fromUserId:string, toUserId: string}
  if (userId) {
    // 1. 查询历史记录表,群聊ID为空表示私聊
    // groups:查询 GROUPINFO表中的群ID==>根据群ID可以查询历史记录表
    groupsSql = `
    SELECT * FROM GROUPINFO WHERE GROUPID =  (SELECT GROUPID FROM GROUPUSER WHERE USERID = '79075de0-17ca-11ea-8b61-ebb7391af6af');
    `;
    db.get(groupsSql, (err, row) => {
      if (err) throw err;
      groups = row;
    });
    // 查询群ID查询历史记录, 返回最近发送的消息时间
    // for(let i = 0; i < groups.length; i++) {
    //   historySql += `SELECT * FROM HISTORY WHERE GROUPID = '${groups[i].GROUPID} ORDER '`
    // }
    // db.all(historySql)
    db.serialize(function() {
      // 这里执行的命令是串行的
      db.serialize(function() {
        // 这里执行的命令是串行的
      });
      // 这里执行的命令是串行的
    });
  } else {
    // 游客身份可以浏览一个默认的群
    sql = `SELECT * FROM GROUPINFO WHERE GROUPID = 'c31091d0-1735-11ea-8132-7fd89f085ca9'`;
    return new Promise((resolve, reject) => {
      db.get(sql, (err, row) => {
        if (err) reject(err);
        console.log(row, 'GROUPINFO-row');
        messages.push({
          ID: common.getGuid(),
          GROUPID: row.GROUPID,
          GROUPNAME: row.GROUPNAME,
          AVATAR: row.AVATAR,
          CONTENT: '', // 预览最近的一条信息
          LATEDTIME: '',
          FROMUSERID: '', // 发送人
          TOUSERID: ''
        });
        return resolve(messages);
      });
    });
  }
};
// 获取历史消息
exports.getHistoryList = function(data) {
  let sql;
  // 群聊
  if (data.GROUPID) {
    // 根据群ID查询历史记录表并根据时间降序排序
    sql = `
      SELECT * FROM HISTORY WHERE GROUPID = '${data.GROUPID}' ORDER BY TS DESC; 
    `;
    return new Promise((resolve, reject) => {
      db.get(sql, (err, row) => {
        if (err) return reject(err);
        console.log(row, 'history->row');
        return resolve(row);
      });
    });
  } else {
    // 私聊
  }
};
// 使用代码创建表,创建用户信息表
// db.run(
//   `create table USERINFO (
//     ${USERINFO.USERID} INT,
//     ${USERINFO.USERCODE} VARCHAR,
//     ${USERINFO.USERNAME} VARCHAR,
//     ${USERINFO.PASSWORD} VARCHAR,
//     ${USERINFO.SEX} VARCHAR,
//     ${USERINFO.REMARK} VARCHAR,
//     ${USERINFO.ONLINESTATE} VARCHAR,
//     ${USERINFO.LASTONLINETIME} VARCHAR,
//     ${USERINFO.TS} VARCHAR
//     )`,
//   err => {
//     if (err) throw err;
//     console.log('用户信息表创建成功');
//   }
// );
// // 创建群信息表
// db.run(
//   `create table GROUPINFO (
//     ${GROUPINFO.GROUPID} INT,
//     ${GROUPINFO.GROUPNAME} VARCHAR,
//     ${GROUPINFO.GROUPREMARK} VARCHAR,
//     ${GROUPINFO.CREATEUSERID} VARCHAR,
//     ${GROUPINFO.CREATETIME} VARCHAR,
//     ${GROUPINFO.DISSOLUTIONTIME} VARCHAR,
//     ${GROUPINFO.GROUPSTATE} VARCHAR
//     )`,
//   err => {
//     if (err) throw err;
//     console.log('群信息表创建成功');
//   }
// );
// db.run(
//   `create table GROUPUSER (
//     ${GROUPUSER.ID} INT,
//     ${GROUPUSER.GROUPID} VARCHAR,
//     ${GROUPUSER.USERID} VARCHAR,
//     ${GROUPUSER.STATE} VARCHAR,
//     ${GROUPUSER.JOINTIME} VARCHAR,
//     ${GROUPUSER.QUITTIME} VARCHAR,
//     ${GROUPUSER.TS} VARCHAR
//     )`,
//   err => {
//     if (err) throw err;
//     console.log('群用户表创建成功');
//   }
// );
// // 创建历史记录表
// db.run(
//   `create table HISTORY (
//     ${HISTORY.MESSAGEID} INT,
//     ${HISTORY.GROUPID} VARCHAR,
//     ${HISTORY.FROMUSERID} VARCHAR,
//     ${HISTORY.TOUSERID} VARCHAR,
//     ${HISTORY.CONTENT} VARCHAR,
//     ${HISTORY.TIME} VARCHAR,
//     ${HISTORY.TS} VARCHAR
//     )`,
//   err => {
//     if (err) throw err;
//     console.log('历史记录表创建成功');
//   }
// );
// // 创建离线表
// db.run(
//   `create table OFFLINE (
//     ${OFFLINE.ID} INT,
//     ${OFFLINE.MESSAGEID} VARCHAR,
//     ${OFFLINE.GROUPID} VARCHAR,
//     ${OFFLINE.FROMUSERID} VARCHAR,
//     ${OFFLINE.CONTENT} VARCHAR,
//     ${OFFLINE.TIME} VARCHAR,
//     ${OFFLINE.TOUSERID} VARCHAR,
//     ${OFFLINE.TS} VARCHAR
//     )`,
//   err => {
//     if (err) throw err;
//     console.log('离线表创建成功');
//   }
// );
