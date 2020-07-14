/*
 * @Author: lh
 * @Date: 2020-07-08 10:49:42
 * @LastEditors: lh
 * @LastEditTime: 2020-07-08 12:45:47
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (38.97%)
 * Likes:    266
 * Dislikes: 0
 * Total Accepted:    64.2K
 * Total Submissions: 159.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;
    let oldLast = head;
    let n;
    // 计算链表长度
    for (n = 1; oldLast.next !== null; n++) {
        oldLast = oldLast.next;
    }
    // 链表闭环
    oldLast.next = head;
    // 新链表尾部
    let newLast = head;
    for (let i = 0; i < n - k % n - 1; i++) {
        newLast = newLast.next;
    }
    // 新链表头部 是新链表尾部的下一个
    let newHead = newLast.next;
    // 新链表断环
    newLast.next = null;
    return newHead;

};
// @lc code=end