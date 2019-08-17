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
        return str;
    var n = len * 2 + 1,
        radius = [0, 1], // 回文半径
        center = 1, // centerPosition 中心位置
        right = 2, //centerRightPosition 中心右侧位置
        currentIndex = 0, // currentRightPosition 当前右侧位置
        iMirror,
        maxRadius = 0, // 最长半径
        maxCenterPosition = 0, // 最长半径所在的索引
        str = '#';
    for (var i = 0; i < s.length; i++) {
        str += s[i] + '#'
    }
    console.log(str)
    len = str.length;
    for (var i = 2; i < len; i++) {
        currentIndex = i;
        radius[i] = 0
        while (currentIndex > radius[i] &&
            currentIndex + radius[i] < len &&
            i % 2 !== 0 &&
            str[currentIndex + radius[i]] == str[currentIndex - radius[i]]) {
            radius[i]++
        }
        if (radius[i] >= maxRadius) {
            maxRadius = radius[i]
            maxCenterPosition = i
        }
    }
    console.log(radius, 'radius')
    str = str.substring(maxCenterPosition - maxRadius, maxCenterPosition + maxRadius)
    console.log(str)
    return str
};
longestPalindrome('abaca') // 'aba'