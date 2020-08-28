/*
 * @Author: lh
 * @Date: 2020-08-06 10:21:00
 * @LastEditors: lh
 * @LastEditTime: 2020-08-06 10:28:58
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (61.91%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    22.3K
 * Total Submissions: 35.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
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
 * 思路: 广度优先遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    if(!root) return res;
    let queue = [root];
    while(queue.length){
        let curr = [], temp = [];
        while(queue.length){
            let node  = queue.shift();
            curr.push(node.val);
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right);
        }
        res.unshift(curr);
        queue = temp;
    }
    return res;
};
// @lc code=end

