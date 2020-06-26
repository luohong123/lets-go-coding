/*
 * @Author: lh
 * @Date: 2020-06-25 17:47:39
 * @LastEditors: lh
 * @LastEditTime: 2020-06-25 18:31:11
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (36.01%)
 * Likes:    496
 * Dislikes: 0
 * Total Accepted:    86.4K
 * Total Submissions: 228.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let n = nums.length, c, d;
    let res = [];
    if (n < 4) return res;
    nums.sort((a, b) => { return a - b });
    for (let a = 0; a <= n - 4; a++) {
        // 保证不重复
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        // 将四数之和转为三数之和
        for (let b = a + 1; b <= n - 3; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;
            c = b + 1;
            d = n - 1;
            while (c < d) {
                if (c > b + 1 && nums[c] === nums[c - 1]) {
                    c++;
                    continue;
                }
                let sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum > target) {
                    d--;
                } else if (sum < target) {
                    c++;
                } else {
                    res.push([nums[a], nums[b], nums[c], nums[d]]);
                    c++;
                    d--;
                }
            }
        }
    }
    return res;

};
// @lc code=end