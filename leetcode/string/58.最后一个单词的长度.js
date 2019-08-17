/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (30.72%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    37.5K
 * Total Submissions: 122K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // 删除两端空白字符
    s = s.trim();
    var end = s.length - 1;
    if (end === 1) return 0;

    var start = end;
    while (start >= 0 && s.charAt(start) !== ' ') {
        start--;
    }
    return end - start
};
lengthOfLastWord("Hello World "); // 5
lengthOfLastWord("cc "); // 0