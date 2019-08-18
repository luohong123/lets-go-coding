/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (46.46%)
 * Likes:    581
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 149.1K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 4   1 1 1 1，1 2 1，2 1 1，1 1 2，2 2
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 斐波那契数
    if (n == 1) {
        return 1;
    }
    let first = 1,
        second = 2;
    for (var i = 3; i <= n; i++) {
        var third = first + second;
        first = second;
        second = third
    }
    console.log(second);
    return second;
};
climbStairs(3); // 3
climbStairs(4); // 5
climbStairs(5); // 8