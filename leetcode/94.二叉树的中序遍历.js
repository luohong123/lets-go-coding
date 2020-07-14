/*
 * @Author: lh
 * @Date: 2020-07-13 16:39:25
 * @LastEditors: lh
 * @LastEditTime: 2020-07-14 13:52:57
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (67.32%)
 * Likes:    567
 * Dislikes: 0
 * Total Accepted:    189.5K
 * Total Submissions: 263.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

const {
    inRange
} = require("lodash");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路一: 递归 中序遍历 左=>根=>右
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//     if (!root) return [];
//     let res = [];
//     let helper = (root) => {
//         root.left && helper(root.left);
//         res.push(root.val);
//         root.right && helper(root.right);
//     }
//     root && helper(root);
//     return res;
// };

var inorderTraversal = function (root) {
    let res = [],
        stack = [],
        current  = root;
    while (current || stack.length) {
        // 左节点
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        // 根
        res.push(current.val);
        // 右
        current = current.right;
    }
    return res;
}
// @lc code=end