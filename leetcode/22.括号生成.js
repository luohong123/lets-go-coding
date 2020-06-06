/*
 * @Author: qingcheng
 * @Date: 2020-05-05 22:06:57
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-06 11:54:55
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.12%)
 * Likes:    464
 * Dislikes: 0
 * Total Accepted:    33.4K
 * Total Submissions: 46.8K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */


// @lc code=start
/**
 * 方法一：暴力法。解题思路: 第一个字符肯定是'(',
 * 遇到 ')' 加 -1  遇到 '(' 加1,ln代表左括号，rn代表右括号
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let list = [];

    function sum(str, num, ln, rn) {
        if (str.length === 2 * n - 1) { // 左右括号
            str += ln ? '(' : ')';
            list.push(str);
            return;
        }
        num >= 0 && ln > 0 ? (str += '(', ln--) : (str += ')', rn--);
        // 递归
        rn > 0 && sum(str, -1, ln, rn);
        ln > 0 && sum(str, 1, ln, rn);
    }
    sum('', 0, n, n);
    return list.filter(item => isValid(item));
};

function isValid(str) {
    let sum = 0;
    for (let prop of str) {
        sum += prop === ')' ? -1 : 1;
        if (sum < 0) return false;
    }
    return true;

}
// @lc code=end