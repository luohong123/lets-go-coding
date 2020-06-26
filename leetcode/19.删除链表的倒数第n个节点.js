/*
 * @Author: lh
 * @Date: 2020-06-16 09:54:47
 * @LastEditors: lh
 * @LastEditTime: 2020-06-16 13:56:41
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (35.05%)
 * Likes:    855
 * Dislikes: 0
 * Total Accepted:    182K
 * Total Submissions: 469.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * 解题思路: 笨方法，循环两遍 先得出链表的长度length，
 * 再改变 length - n - 1 的next指向 为 length - n
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head === null) return null;
    let dummy = new ListNode(0, head);
    // 虚拟节点
    dummy.next = head;
    let len = 0, first = head;
    // 计算链表长度
    while (first) {
        len++;
        first = first.next;
    }
    len -= n;
    first = dummy;
    while (len > 0) {
        len--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
};
// @lc code=end