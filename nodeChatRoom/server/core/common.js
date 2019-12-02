/*
 * @Author: honghong
 * @Date: 2019-11-19 19:38:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-30 14:20:00
 * @Description: 
 * @email: 3300536651@qq.com
 */
var UUID = require('uuid');

/**
 * 获取guid
 */
exports.getGuid = function () {
    return UUID.v1();
}