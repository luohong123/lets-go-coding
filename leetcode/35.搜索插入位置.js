/*
 * @Author: qingcheng
 * @Date: 2020-04-23 09:57:35
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-04-23 23:34:40
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (44.03%)
 * Likes:    298
 * Dislikes: 0
 * Total Accepted:    64.3K
 * Total Submissions: 146K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */

// @lc code=start
/**
 * 方法一：二分法。解题思路：首先有序的数组我第一个想到的是二分法，设置left、right下标，
 * mid为中间的下标,如果target等于下标，直接返回下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid;
    while(left <= right) {
        mid = parseInt((right + right)/2);
        if(nums[mid] === target) {
            return mid;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return left;
};
// @lc code=end

