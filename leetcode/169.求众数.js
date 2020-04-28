/*
 * @Author: your name
 * @Date: 2020-04-21 12:28:18
 * @LastEditTime: 2020-04-29 00:00:31
 * @LastEditors: qingcheng
 * @Description: In User Settings Edit
 * @FilePath: \lets-go-coding\leetcode\169.求众数.js
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.30%)
 * Likes:    568
 * Dislikes: 0
 * Total Accepted:    157.5K
 * Total Submissions: 250.1K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * 方法一：排序，由于多数元素出现次数大于n/2，那么排序后的
 * nums[(nums.length/2)] 一定是众数
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//   nums.sort();
//   return nums[parseInt(nums.length / 2)];
// };
/**
 * 方法二：哈希表，JavaScript的对象类似哈希表
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  // 记录次数
  let obj = {};
  if(nums.length <= 1) return nums[0];
  for(let i = 0; i < nums.length; i++) {
    if(!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = 1;
    } else {
      // 当哈希表存在时，检查哈希值次数是否 >= 数组长度的一半
      obj[nums[i]] = obj[nums[i]] + 1;
      if(obj[nums[i]] >= Math.ceil(nums.length / 2)) {
        return nums[i];
      }
    }
  }
};
// @lc code=end

