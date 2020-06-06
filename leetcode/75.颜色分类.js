/*
 * @Author: qingcheng
 * @Date: 2020-05-09 16:22:32
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-09 16:49:34
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (52.71%)
 * Likes:    407
 * Dislikes: 0
 * Total Accepted:    79.2K
 * Total Submissions: 144.3K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例:
 * 
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 * 
 * 
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 */

// @lc code=start
/**
 * 解题思路,通过遍历，p0,current,p2,如果当前值为0和p0交换，
 * p0右移;如果当前值为2,p2左移动；
 * 如果当前值为1,current+1,
 * While curr <= p2 :
 * 若 nums[curr] = 0 ：交换第 curr个 和 第p0个 元素，并将指针都向右移。
 * 若 nums[curr] = 2 ：交换第 curr个和第 p2个元素，并将 p2指针左移 。
 * 若 nums[curr] = 1 ：将指针curr右移。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let p0 = 0,
        current = 0,
        p2 = nums.length - 1,
        temp;
    while (current <= p2) {
        if (nums[current] === 0) {
            temp = nums[p0];
            nums[p0++] = nums[current];
            nums[current++] = temp;
        } else if (nums[current] === 2) {
            temp = nums[current];
            nums[current] = nums[p2];
            nums[p2--] = temp;
        } else { // 如果值为1,不交换，继续遍历
            current++;
        }
    }
    return nums;
};
// @lc code=end