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
/**
 * 新增用户
 */
exports.userInfoAdd = function(data) {
  db.run(
    `INSERT INTO USERINFO (USERID,USERNAME,PASSWORD)
  VALUES (
    '${data.USERID}',
    '${data.USERNAME}',
    '${data.PASSWORD}'
    );`,
    err => {
      if (err) throw err;
      console.log('新增用户成功');
    }
  );
};
/**
 * 根据USERNAME查询用户信息,用于用户名查重、登录验证
 */
exports.getUserInfoByName = function(userName) {
  db.get(
    `SELECT * FROM USERINFO WHERE USERNAME = '${userName}';`,
    (err, row) => {
      if (err) throw err;
      console.log(row);
      return row;
    }
  );
};
/**
 * 根据USERNAME查询用户信息,用于用户名查重、登录验证
 */
exports.getUserInfoById = function(userId) {
  db.get(`SELECT * FROM USERINFO WHERE USERNAME = '${userId}';`, (err, row) => {
    if (err) throw err;
    console.log(row);
    return row;
  });
};
/**
 * 验证用户名和密码是否输入一直
 */
exports.loginValid = function(userInfo) {
  let query = `SELECT * FROM USERINFO WHERE USERNAME = '${userInfo.USERNAME}' AND PASSWORD = '${userInfo.PASSWORD}'`;
  db.get(query, (err, row) => {
    if (err) throw err;
    console.log(row, 'row');
    if (
      userInfo.USERNAME &&
      userInfo.PASSWORD &&
      userInfo.USERNAME === row.USERNAME &&
      userInfo.PASSWORD === row.PASSWORD
    ) {
      return true;
    } else {
      return false;
    }
  });
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
