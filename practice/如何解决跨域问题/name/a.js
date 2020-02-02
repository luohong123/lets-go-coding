/*
 * @Author: honghong
 * @Date: 2020-01-31 18:56:31
 * @LastEditors: honghong
 * @LastEditTime: 2020-01-31 19:00:39
 * @Description: 
 * @email: 3300536651@qq.com
 */
// 参考浪里行舟的GitHub：https://github.com/ljianshu/Blog/blob/master/%E5%A4%9A%E7%A7%8D%E8%B7%A8%E5%9F%9F%E6%96%B9%E5%BC%8F/4.name/a.js
let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3000);