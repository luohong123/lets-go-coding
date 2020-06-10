/*
 * @Author: lh
 * @Date: 2020-06-10 17:13:24
 * @LastEditors: lh
 * @LastEditTime: 2020-06-10 18:02:05
 * @Description: 移除链表元素
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (42.01%)
 * Likes:    395
 * Dislikes: 0
 * Total Accepted:    81.9K
 * Total Submissions: 179.6K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
/*
 * 解题思路： 操作链表节点的指针指向
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return null;
    let sentinel = new ListNode(null),
        cur = sentinel,
        pre = head;
    sentinel.next = head;
    // 迭代法
    while (cur) {
        if (cur !== null && cur.val === val) {
            pre.next = cur.next;
            cur = pre.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }›
    return sentinel.next;
};
// @lc code=end