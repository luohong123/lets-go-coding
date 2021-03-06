/*
 * @Author: lh
 * @Date: 2020-06-04 13:10:29
 * @LastEditors: lh
 * @LastEditTime: 2020-06-04 15:46:26
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (50.18%)
 * Likes:    389
 * Dislikes: 0
 * Total Accepted:    34.3K
 * Total Submissions: 68.4K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start
/**
 * 解题思路：回溯法
 * @param {string} digits
 * @return {string[]}
 */
var kvArray = [
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
];
var phone = new Map(kvArray);
var output = [];
/**
 * 回溯法
 * @param {*} combination 已经产生的组合
 * @param {*} next_digits 接下来准备要输入的数字
 */
function backtrack(combination, next_digits) {
    // 如果没有更多的数字要检查
    if (!next_digits) {
        // 组合完成
        output.push(combination);
    } else { // 是否还有数字需要检查
        // 遍历所有映射的字母
        // 下一个可用的数字
        let digit = next_digits.substring(0, 1);
        // 返回键对应的值，如果不存在，则返回undefined。
        let letters = phone.get(digit);
        for (let i = 0; i < letters.length; i++) {
            let letter = letters[i];
            // 将当前字母附加到组合中
            // 然后继续下一个数字
            backtrack(combination + letter, next_digits.substring(1));
        }
    }
}
var letterCombinations = function (digits) {
    if (!digits || digits.length === 0) {
        return [];
    }
    if (digits.length === 1) return phone.get(digits);
    backtrack("", digits);
    return output;
};
// @lc code=end