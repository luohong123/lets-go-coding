/*
 * @Author: qingcheng
 * @Date: 2020-05-07 09:09:32
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-09 16:18:43
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (37.88%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    93.8K
 * Total Submissions: 220.7K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */

// @lc code=start
/**
 * 解题思路: 首先按照区间的左端点进行排序, 如果当前区间的左端点比前一个
 * 区间的右端点大，说明不重叠，反之，判断当前区间的右端点如果比前一个区间的
 * 右端点大，说明重叠，上个区间的右端点设置为当前区间右端点，如果当前区间
 * 右端点比上个区间的右端点小，说明已经和上个区间重叠了
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return intervals
    intervals.sort(function (a, b) {
        return a[0] - b[0]
    });
    let res = [prev];
    let curr;
    for (let i = 1; i < intervals.length; i++) {
        curr = intervals[i];
        if (curr[0] > res[res.length - 1][1]) {
            res.push(curr);
        } else {
            if (curr[1] > res[res.length - 1][1]) {
                res[res.length - 1][1] = curr[1];
            }
        }
    }
    return res
};
// @lc code=end