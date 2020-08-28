/*
 * @Author: lh
 * @Date: 2020-07-30 23:13:36
 * @LastEditors: lh
 * @LastEditTime: 2020-07-30 23:15:11
 * @Description: 
 * @email: 3300536651@qq.com
 */ 
/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (51.04%)
 * Likes:    232
 * Dislikes: 0
 * Total Accepted:    61.5K
 * Total Submissions: 112.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层次遍历如下：
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
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
 * @return {number[][]}
 */
function go(node, l, res) {
    if (!node) return;
    if (res[l] == null) {
        res.push([]);
    }
    if (l % 2 === 0) {
        res[l].push(node.val);
    } else {
        res[l].unshift(node.val);
    }
    go(node.left, l + 1, res);
    go(node.right, l + 1, res);
}
var zigzagLevelOrder = function (root) {
    let res = [];
    go(root, 0, res);
    return res;
};
// @lc code=end