/*
 * @Author: lh
 * @Date: 2020-06-06 09:24:52
 * @LastEditors: lh
 * @LastEditTime: 2020-06-06 09:52:56
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (42.15%)
 * Likes:    624
 * Dislikes: 0
 * Total Accepted:    166.3K
 * Total Submissions: 345.5K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，判断链表中是否有环。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你能用 O(1)（即，常量）内存解决此问题吗？
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
 * 解题思路: 方法一：通过哈希表，当一个链表没有环时，
 * 链表尾部的下一个节点应为空；如果有环，那么之前保存的节点
 * 应该存在于哈希表中。
 * 时间复杂度 O(n) 空间复杂度O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     let set = new Set();
//     while (head !== null) {
//         // 哈希表中存在，说明有环
//         if (set.has(head)) {
//             return true;
//         } else {
//             set.add(head);
//             head = head.next;
//         }
//     }
//     return false;
// };


/**
 * 解题思路: 方法二：通过快慢指针，首先我们先思考一个问题，
 * 当我们两个人在环形操场跑步时，A比B跑的快，那么A和B总会相遇
 * ，回到快慢指针中，快指针fast每次跑两步，慢指针slow每次跑一步，
 * 如果两者相遇，那么说明有环
 * 时间复杂度 O(n) 空间复杂度O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null || head.next == null) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast) {
        // 注意: 如果没有环，快指针是最先到达尾部的
        if (fast == null || fast.next === null) {
            return false;
        }
        // 慢指针每次移动一步
        slow = slow.next;
        // 快指针每次移动两步
        fast = fast.next.next;
    }
    return true;
};
// @lc code=end