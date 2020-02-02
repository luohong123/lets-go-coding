/*
 * @Author: honghong
 * @Date: 2020-01-31 17:43:05
 * @LastEditors: honghong
 * @LastEditTime: 2020-01-31 18:08:11
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.41%)
 * Likes:    655
 * Dislikes: 0
 * Total Accepted:    109K
 * Total Submissions: 316.4K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 暴力法
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0 || strs[0] === '') {
//         return '';
//     }
//     let str = strs[0],
//         common = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (str[i] !== strs[j][i]) {
//                 return common.join('');
//             }
//         }
//         common.push(str[i]);
//     }
//     return str;
// };
// 扫描法
var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs[0] === '') {
        return '';
    }
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(str) !== 0) {
            if (str.length === 0) return '';
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
}
// @lc code=end