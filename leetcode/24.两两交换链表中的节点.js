/*
 * @Author: lh
 * @Date: 2020-06-06 23:22:16
 * @LastEditors: lh
 * @LastEditTime: 2020-06-07 22:20:21
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (61.50%)
 * Likes:    507
 * Dislikes: 0
 * Total Accepted:    109.2K
 * Total Submissions: 166.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 解题思路: 使用迭代操作指针指向
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) return head;
    // 虚拟节点充当列表头节点的prevNode，因此存储指向头节点的指针
    let firstNode, secondNode;
    while (head !== null && head.next !== null) {
        // 要交换的节点
        firstNode = head;
        secondNode = head.next;
        // 交换

    }
};
// @lc code=end