/*
 * @Author: honghong
 * @Date: 2020-01-31 18:39:20
 * @LastEditors: lh
 * @LastEditTime: 2020-05-25 21:05:47
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (38.72%)
 * Likes:    246
 * Dislikes: 0
 * Total Accepted:    73.3K
 * Total Submissions: 189.3K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */

// @lc code=start
/**
 * 解题思路：通过indexOf内置函数，滑动窗口
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 使用内置函数
var strStr = function (haystack, needle) {
    let nLen = needle.length,
        hLen = haystack.length;
    for (let start = 0; start < hLen - nLen + 1; ++start) {
        if (haystack.substring(start, start + nLen).indexOf(needle) !== -1) {
            return start;
        }
    }
    return -1;

};
// @lc code=end