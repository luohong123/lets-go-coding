/*
 * @Author: lh
 * @Date: 2020-08-06 10:07:58
 * @LastEditors: lh
 * @LastEditTime: 2020-08-06 10:14:49
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (63.45%)
 * Likes:    256
 * Dislikes: 0
 * Total Accepted:    45.6K
 * Total Submissions: 65.9K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let hash = {};
    for (let i = 0; i < inorder.length; i++) {
        hash[inorder[i]] = i;
    }
    let recur = function (start, end) {
        if (start > end) return null;
        // 选择后序序列的最后一个节点为根节点
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }
    return recur(0, inorder.length - 1);
};
// @lc code=end