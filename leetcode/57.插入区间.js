/*
 * @Author: qingcheng
 * @Date: 2020-05-09 15:53:03
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-09 16:19:54
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (34.87%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    21.4K
 * Total Submissions: 57.4K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 * 
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * 
 * 示例 1:
 * 
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let arr = intervals.concat([newInterval]);
    arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    console.log(arr);
    let current;
    res = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        if (current[0] > res[res.length - 1][1]) {
            res.push(current);
            
        } else {
            if (current[1] > res[res.length - 1][1]) {
                res[res.length - 1][1] = current[1];
            }
        }
    }
    return res;
};
// @lc code=end