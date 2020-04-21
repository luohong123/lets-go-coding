/*
 * @Author: your name
 * @Date: 2020-04-21 12:08:14
 * @LastEditTime: 2020-04-21 12:17:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lets-go-coding\leetcode\167.两数之和-ii-输入有序数组.js
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (49.65%)
 * Likes:    283
 * Dislikes: 0
 * Total Accepted:    84.5K
 * Total Submissions: 158.3K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */

// @lc code=start
/**
 * 通过快慢指针方法，解题思路，由于index1必须小于index2，
 * 输入的是有序数组且答案唯一，那么
 * 使用快慢指针numbers[low]、 numbers[high]，
 * numbers[low] + numbers[high]大于 target时，快指针 high 索引
 * 减 1 ，反之慢指针 low 索引加 1
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let low = 0, 
      high = numbers.length - 1;
  while(low < high) {
    let sum = numbers[low] + numbers[high];
    if(sum === target) {
      return [low + 1, high + 1];
    } else if(sum < target){
      low++;
    } else {
      high--;
    }
  }
  return [-1, -1 ];
};
// @lc code=end

