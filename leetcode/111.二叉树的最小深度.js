/*
 * @Author: lh
 * @Date: 2020-08-11 11:01:55
 * @LastEditors: lh
 * @LastEditTime: 2020-08-11 17:58:22
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (39.77%)
 * Likes:    315
 * Dislikes: 0
 * Total Accepted:    100.6K
 * Total Submissions: 233.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return null;
    if (root.left === null && root.right === null) return 1;
    let min_depth = Number.MAX_VALUE;
    if (root.left !== null) {
        min_depth = Math.min(minDepth(root.left), min_depth);
    }
    if (root.right !== null) {
        min_depth = Math.min(minDepth(root.right), min_depth);
    }
    return min_depth + 1;
};
// @lc code=end