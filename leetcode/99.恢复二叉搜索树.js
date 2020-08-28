/*
 * @Author: lh
 * @Date: 2020-07-21 00:06:26
 * @LastEditors: lh
 * @LastEditTime: 2020-07-30 23:13:02
 * @Description: 
 * @email: 3300536651@qq.com
 */ 
/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 *
 * https://leetcode-cn.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (54.72%)
 * Likes:    252
 * Dislikes: 0
 * Total Accepted:    21.5K
 * Total Submissions: 37.4K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * 二叉搜索树中的两个节点被错误地交换。
 * 
 * 请在不改变其结构的情况下，恢复这棵树。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,null,null,2]
 * 
 * 1
 * /
 * 3
 * \
 * 2
 * 
 * 输出: [3,1,null,null,2]
 * 
 * 3
 * /
 * 1
 * \
 * 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,1,4,null,null,2]
 * 
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 * 
 * 输出: [2,1,4,null,null,3]
 * 
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 * 
 * 进阶:
 * 
 * 
 * 使用 O(n) 空间复杂度的解法很容易实现。
 * 你能想出一个只使用常数空间的解决方案吗？
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let node1, node2;
    let prev = new TreeNode(-Number.MAX_VALUE);
    traverse(root);
    let tmp = node1.val;
    node1.val = node2.val;
    node2.val = tmp;
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        if (node.val < prev.val) {
            node2 = node;
            if (!node1) node1 = prev;
        }
        prev = node;
        traverse(node.right);
    }
};
// @lc code=end