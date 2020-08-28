/*
 * @Author: lh
 * @Date: 2020-07-20 14:29:42
 * @LastEditors: lh
 * @LastEditTime: 2020-07-20 14:44:03
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (61.72%)
 * Likes:    709
 * Dislikes: 0
 * Total Accepted:    73.4K
 * Total Submissions: 106.2K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 */

// @lc code=start
/**
 * 卡塔兰数
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res = res * 2 * (2 * i + 1) / (i + 2);
    }
    return res;
};
// @lc code=end