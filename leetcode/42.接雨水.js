/*
 * @Author: lh
 * @Date: 2020-06-21 13:57:34
 * @LastEditors: lh
 * @LastEditTime: 2020-07-08 09:52:20
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (45.75%)
 * Likes:    1375
 * Dislikes: 0
 * Total Accepted:    111.6K
 * Total Submissions: 217.4K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * 双指针,时间复杂度O(N) 空间复杂度O(1)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height) return null;
    let left = 0,
        right = height.length - 1,
        leftMax = 0,
        rightMax = 0,
        ans = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? 
            (leftMax = height[left]) :
             ans += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ?
             (rightMax = height[right]) : 
             ans += (rightMax - height[right]);
            right--;
        }
    }
    return ans;
};
// @lc code=end