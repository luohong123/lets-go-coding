/*
 * @Author: honghong
 * @Date: 2019-11-19 19:38:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-19 20:49:31
 * @Description:
 * @email: 3300536651@qq.com
 */
/**
 * 获取guid
 */
export function getGuid() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 获取当前时间
 */
export function getTime(format) {
  let date = new Date();
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp('(' + k + ')').test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
  return format;
}

export function getUserName() {
  let userInfo = window.localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo.userInfo) : null;
}
/**
 * 防抖
 * @param {*} fn 
 * @param {*} wait 
 */
export function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}