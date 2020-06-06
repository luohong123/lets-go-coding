/*
 * @Author: lh
 * @Date: 2020-05-25 21:06:47
 * @LastEditors: lh
 * @LastEditTime: 2020-05-25 21:25:33
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (46.79%)
 * Likes:    2010
 * Dislikes: 0
 * Total Accepted:    244.4K
 * Total Submissions: 477.1K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * 解题思路：动态规划 f(i)=max{f(i−1)+a(i) ,a(i)} 记录第i个数
 *的连续子数组的最大和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let prev = 0,
        maxAns = nums[0];
    nums.forEach((x) => {
        // 上一个+当前，和当前 相比较，取最大
        prev = Math.max(prev + x, x);
        // 之前相加的最大连续子数组的和
        maxAns = Math.max(prev, maxAns)
    })
    return maxAns;
};
// @lc code=end