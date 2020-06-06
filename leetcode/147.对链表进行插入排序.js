/*
 * @Author: qingcheng
 * @Date: 2020-05-09 16:52:11
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-20 23:20:58
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 *
 * https://leetcode-cn.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (59.65%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    28.1K
 * Total Submissions: 43.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 对链表进行插入排序。
 * 
 * 
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 * 
 * 
 * 
 * 插入排序算法：
 * 
 * 
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2：
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
 * 解题思路：从表头开始循环，当前节点和pre比较，
 * 如果大于或等于pre说明不用排序；反之，
 * 依次和pre比较，插入到对应到的位置
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (head === null) return head;
    let preHead = new ListNode(0);
    let current = head;
    let pre = preHead;
    let next = null;
    while (current) {
        next = current.next;
        while (pre.next && pre.next.val < current.val) {
            pre = pre.next;
        }
        current.next = pre.next;
        pre.next = current;
        pre = preHead;
        current = next;
    }
    return preHead.next;
};
// @lc code=end