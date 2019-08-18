/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.30%)
 * Likes:    328
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 171.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        // 最后一位没有进位,前面的也不会进位，直接返回即可
        if (digits[i] !== 0) return digits;
    }
    // 执行到这里时，说明是[9,9],[9,9,9] 等特殊数组，末尾进位，且长度+1
    digits[len] = 0;
    // 首位为1
    digits[0] = 1;
    return digits
};


plusOne([9, 9]); // [1,0,0]
plusOne([5, 6]); // [5,7]
plusOne([9, 0, 9]); // [9,1,0]