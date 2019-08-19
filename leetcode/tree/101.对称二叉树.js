/*
 * @Author: luohong
 * @Date: 2019-08-19 11:21:52
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-19 13:27:41
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (48.05%)
 * Likes:    409
 * Dislikes: 0
 * Total Accepted:    48.2K
 * Total Submissions: 100.3K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // 迭代法
    let q = [];
    q.push(root);
    q.push(root);
    while (q.length !== 0) {
        let t1 = q.pop();
        let t2 = q.pop();
        if (t1 == null && t2 == null) {
            continue;
        } else if (t1 == null || t2 == null) {
            return false;
        } else {
            if (t1.val !== t2.val) {
                return false;
            } else {
                q.push(t1.left);
                q.push(t2.right);
                q.push(t1.right);
                q.push(t2.left);
            }
        }

    }
    return true;
};