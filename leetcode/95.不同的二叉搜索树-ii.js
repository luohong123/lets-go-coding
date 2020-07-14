/*
 * @Author: lh
 * @Date: 2020-07-14 13:58:59
 * @LastEditors: lh
 * @LastEditTime: 2020-07-14 14:29:09
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (58.45%)
 * Likes:    462
 * Dislikes: 0
 * Total Accepted:    36.3K
 * Total Submissions: 57.2K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：3
 * 输出：
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * 解释：
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路一: 递归
 * @param {number} n
 * @return {TreeNode[]}
 */
function helper(start, end) {
    let res = [];
    // 递归终止条件
    if (start > end) {
        res.push(null);
        return res;
    }
    if (start === end) {
        let tree = new TreeNode(start);
        res.push(tree);
        return res;
    }
    for (let i = start; i <= end; i++) {
        let leftTrees = helper(start, i - 1);
        let rightTrees = helper(i + 1, end);
        for (let leftTree of leftTrees) {
            for (let rightTree of rightTrees) {
                let current = new TreeNode(i);
                current.left = leftTree;
                current.right = rightTree;
                res.push(current);
            }
        }
    }
    return res;
}
var generateTrees = function (n) {
    let res = [];
    if (!n) return res;
    return helper(1, n);
};
// @lc code=end