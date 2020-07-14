/*
 * @Author: lh
 * @Date: 2020-07-11 21:08:02
 * @LastEditors: lh
 * @LastEditTime: 2020-07-11 22:06:04
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 *
 * https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/description/
 *
 * algorithms
 * Medium (61.42%)
 * Likes:    231
 * Dislikes: 0
 * Total Accepted:    19.3K
 * Total Submissions: 29.2K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
 * 
 * 找到所有出现两次的元素。
 * 
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 * 
 * 示例：
 * 
 * 
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出:
 * [2,3]
 * 
 * 
 */

// @lc code=start
/**
 * 思路: 把值变成index
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    if (!nums) return nums;
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            res.push(index + 1);
        }
        [4,7,2,3,8,2,3,1]
        nums[index] = -Math.abs(nums[index]);
    }
    return res;
};
// @lc code=end