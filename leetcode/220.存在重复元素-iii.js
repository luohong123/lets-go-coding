/*
 * @Author: qingcheng
 * @Date: 2020-05-20 23:49:59
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-21 00:00:05
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode-cn.com/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Medium (24.73%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    17.5K
 * Total Submissions: 67.3K
 * Testcase Example:  '[1,2,3,1]\n3\n0'
 *
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j
 * 之间的差的绝对值最大为 ķ。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3, t = 0
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1, t = 2
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出: false
 * 
 */

// @lc code=start
/**
 * 解题思路：使用桶排序，时间复杂度O(n)
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    function getID(x, w) {
        return Math.floor(x / w);
    }

    if (t < 0) return false;
    let d = new Map();
    let w = t + 1;
    for (let i = 0; i < nums.length; ++i) {
        let m = getID(nums[i], w);
        if (d.has(m))
            return true;
        if (d.has(m - 1) && Math.abs(nums[i] - d.get(m - 1)) < w)
            return true;
        if (d.has(m + 1) && Math.abs(nums[i] - d.get(m + 1)) < w)
            return true;
        d.set(m, nums[i]);
        if (i >= k) d.delete(getID(nums[i - k], w));
    }
    return false;
};
// @lc code=end