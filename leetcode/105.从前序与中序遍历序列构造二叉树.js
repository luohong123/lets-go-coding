/*
 * @Author: lh
 * @Date: 2020-07-30 23:15:46
 * @LastEditors: lh
 * @LastEditTime: 2020-07-30 23:16:39
 * @Description: 
 * @email: 3300536651@qq.com
 */ 
/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (60.57%)
 * Likes:    593
 * Dislikes: 0
 * Total Accepted:    99.8K
 * Total Submissions: 147.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let p = i = 0;
    function build(stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[p++]);
            root.left = build(root.val);
            i++;
            root.right = build(stop);
            return root;
        }
        return null;
    }
    return build()
};
// @lc code=end