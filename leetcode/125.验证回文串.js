/*
 * @Author: lh
 * @Date: 2020-07-02 10:05:56
 * @LastEditors: lh
 * @LastEditTime: 2020-07-02 11:14:47
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (40.67%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    137.3K
 * Total Submissions: 300.4K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * 解题思路一: 使用双指针，left right 在循环时，当遇到字符或数字时 才移动指针，当left right 指针
 * 都符合字母和数字字符时，才判断left right是否相等
 * A man, a plan, a canal: Panama
 * a man a plan a canal panama
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // 空字符串也满足
    if (!s) return true;
    // 时间复杂度为O(N) 因为先把不考虑的过滤了
    // 把非字符 非字母的过滤掉
    let filterS = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let l = 0;
    r = filterS.length - 1;
    while (l < r) {
        if (filterS[l] != filterS[r]) return false;
        l++;
        r--;
    }
    return true;
};
/**
 * 解题思路二：尝试用双指针+O(1)的空间复杂度解决
 * @param {*} s 
 * @return {boolean} 
 */
function isStrNum(input) {
    let regExp = /[0-9a-zA-Z]/;
    return regExp.test(input);
}
var isPalindrome = function (s) {
    if (!s) return true;
    let l = 0,
        r = s.length - 1;
    while (l < r) {
        while (l < r && !isStrNum(s[l])) {
            ++l;
        }
        while (l < r && !isStrNum(s[r])) {
            --r;
        }
        if (s[l].toLowerCase() != s[r].toLowerCase()) {
            return false
        };
        ++l;
        --r;
    }
    return true;
}
// @lc code=end