/*
 * @Author: qingcheng
 * @Date: 2020-04-16 23:05:40
 * @LastEditors: lh
 * @LastEditTime: 2020-06-06 09:26:18
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (47.18%)
 * Likes:    292
 * Dislikes: 0
 * Total Accepted:    91.6K
 * Total Submissions: 183.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
 * 解题思路: 操作节点指针的方法，操作链表的下一个节点的指向，如果当前节点等于下一个节点，
 * 那么下一个节点指向下下个节点。
 * 时间复杂度O(n) 空间复杂度O(1)
 * @param {ListNode} head 排序链表
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 当前节点
    let cur = head;
    // 遍历链表
    while(cur && cur.next) {
        // 当前值 和 下一个节点的值相等
        if(cur.val == cur.next.val) {
            // 当前值的下一个节点 指向下下个节点
            cur.next = cur.next.next;
        }
         else {
            // 反之，继续遍历
            cur = cur.next;
        }
    }
    return head;
};
// @lc code=end

