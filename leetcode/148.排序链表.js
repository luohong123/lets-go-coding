/*
 * @Author: qingcheng
 * @Date: 2020-05-20 23:24:52
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-20 23:45:55
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (61.59%)
 * Likes:    544
 * Dislikes: 0
 * Total Accepted:    61.3K
 * Total Submissions: 93.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 
 * 示例 1:
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2:
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
 * 解题思路：时间复杂度为O(n) 空间复杂度为O(1),利用快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy,
        quick = dummy
    while (quick.next) {
        quick = quick.next
        slow = slow.next
        quick.next && (quick = quick.next)
    }
    // if the slow list is equal to the quick list, it means the current list only has one node.
    if (slow === quick) return dummy.next
    let rightList = slow.next
    slow.next = null
    let leftList = dummy
    return merge(sortList(leftList.next), sortList(rightList))
}

var merge = function (leftList, rightList) {
    const dummy = new ListNode(0)
    dummy.next = leftList
    let lNode = dummy
    let rNode = rightList

    while (lNode && rNode) {
        while (lNode.next && lNode.next.val < rNode.val) {
            lNode = lNode.next
        }
        let rNext = rNode.next
        rNode.next = lNode.next
        lNode.next = rNode
        rNode = rNext
    }
    return dummy.next
}
// @lc code=end