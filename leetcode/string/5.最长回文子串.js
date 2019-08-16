/*
 * @Author: luohong
 * @Date: 2019-08-09 09:57:23
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-16 17:57:15
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
var min = function (a, b) {
    var res = a;
    if (b < a)
        res = b;
    return res;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    //  Manacher's Algorithm 马拉车算法
    var len = s.length;
    if (len == 0 || len == 1)
        return text;

    var n = len * 2 + 1,
        radius = [], // 回文半径
        center = 1, // centerPosition 中心位置
        right = 2, //centerRightPosition 中心右侧位置
        currentIndex = 0, // currentRightPosition 当前右侧位置
        iMirror,
        maxR = 0, // 最长半径
        maxRIndex = 0, // 最长半径所在的索引
        text = '|';
    for (var i = 0; i < s.length; i++) {
        text += s[i] + '|'
    }



    console.log(text)

    return text
};
longestPalindrome('babad') // 'aba'