/*
 * @Author: lh
 * @Date: 2020-01-30 18:23:53
 * @LastEditors: lh
 * @LastEditTime: 2020-06-21 14:34:28
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.59%)
 * Likes:    1741
 * Dislikes: 0
 * Total Accepted:    147.7K
 * Total Submissions: 586.1K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * 解题思路: 指针。 a+b+c =0，就相当于a+b = -c，相当于两数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let n = nums.length,
        ans = [];
    if (n < 1) return ans;
    // 先从小到大进行排序
    nums.sort((a, b) => {
        return a - b
    });
    // 最左端的指针
    for (let first = 0; first < n; ++first) {
        if (first > 0 && nums[first] === nums[first - 1])
            continue;
        // 最右端的指针
        let third = n - 1;
        // 第一个值一定小于0
        let target = -nums[first];
        // 寻找第二个值和第三个值
        for (let second = first + 1; second < n; ++second) {
            if (second > first + 1 && nums[second] === nums[second - 1])
                continue;
            // 保证b指针在c指针的左侧
            while (second < third && nums[second] + nums[third] > target) {
                --third;
            }
            if (second === third) break;
            // 第二个值+第三个值 一定等于第一个值的绝对值
            if (nums[second] + nums[third] === target) {
                let list = [];
                list.push(nums[first]);
                list.push(nums[second]);
                list.push(nums[third]);
                ans.push(list);
            }
        }
    }
    return ans;
};
// @lc code=end