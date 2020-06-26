/*
 * @Author: lh
 * @Date: 2020-06-21 14:49:11
 * @LastEditors: lh
 * @LastEditTime: 2020-06-25 09:56:10
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.42%)
 * Likes:    450
 * Dislikes: 0
 * Total Accepted:    109.7K
 * Total Submissions: 247.4K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * 解题思路: 排序+双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let n = nums.length;
    if (n < 3) return null;
    nums.sort((a, b) => {
        return a - b
    });
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1,right = n - 1;
        while (left < right) {
            let sum = nums[left] + nums[i] + nums[right];
            // 判断sum与target的距离,取距离更小的值
            if (Math.abs(target - sum) < Math.abs(target - res)) 
                res = sum;
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else { // 如果相等 直接返回
                return res;
            }

        }
    }
    return res;
};
// @lc code=end