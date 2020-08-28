/*
 * @Author: lh
 * @Date: 2020-08-06 10:31:59
 * @LastEditors: lh
 * @LastEditTime: 2020-08-06 10:54:48
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (65.92%)
 * Likes:    534
 * Dislikes: 0
 * Total Accepted:    103.6K
 * Total Submissions: 140.6K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 
 * 给定有序数组: [-10,-3,0,5,9],
 * 
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * 思路：中序遍历是有序的数组,广度优先遍历
 * @param {number[]} nums
 * @return {TreeNode}
 */
function buildBST(nums, left, right) {
    if (left > right) return null;
    let mid = left + right >>> 1;
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, left, mid - 1);
    root.right = buildBST(nums, mid + 1, right);
    return root;
}
var sortedArrayToBST = function (nums) {
    if (!nums) return [];
    return buildBST(nums, 0, nums.length - 1);
};
// @lc code=end