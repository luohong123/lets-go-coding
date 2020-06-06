/*
 * @Author: qingcheng
 * @Date: 2020-05-07 21:57:19
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-07 22:02:53
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (63.61%)
 * Likes:    939
 * Dislikes: 0
 * Total Accepted:    229.2K
 * Total Submissions: 333K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while(current!=null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
};
// @lc code=end

