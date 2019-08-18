/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (36.64%)
 * Likes:    208
 * Dislikes: 0
 * Total Accepted:    51.3K
 * Total Submissions: 139.9K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0;
    // 二分查找法
    let left = 0,
        right = parseInt(x / 2 + 1);

    while (left < right) {
        let mid = parseInt((left + right + 1) / 2),
            square = mid * mid;
        if (square > x) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};
mySqrt(4); // 2
mySqrt(8); // 2