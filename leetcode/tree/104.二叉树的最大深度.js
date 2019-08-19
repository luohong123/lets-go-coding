/*
 * @Author: luohong
 * @Date: 2019-08-19 15:22:37
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-19 17:36:23
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (70.43%)
 * Likes:    329
 * Dislikes: 0
 * Total Accepted:    66.7K
 * Total Submissions: 94.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
 * 
 */
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
var maxDepth = function (root) {
    // 迭代
    if (!root) {
        return 0;
    }
    let queue = [],
        i = 0;
    if (root !== null) {
        queue.push(root);
    }
    var depth = 0;
    while (queue.length > 0) {
        let temp = [];
        while (queue.length > 0) {
            let p = queue.shift();
            if (p.left) {
                temp.push(p.left);
            }
            if (p.right) {
                temp.push(p.right);
            }
        }
        i++;
        queue = temp;
    }
    return i;
};
maxDepth([3, 9, 20, null, null, 15, 7])