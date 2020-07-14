/*
 * @Author: lh
 * @Date: 2020-07-02 11:14:52
 * @LastEditors: lh
 * @LastEditTime: 2020-07-02 14:00:40
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (38.35%)
 * Likes:    543
 * Dislikes: 0
 * Total Accepted:    100K
 * Total Submissions: 236.4K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * 思路一: 先遍历链表，把值存到临时数组中，再使用双指针比较，
 * 时间复杂度为O(N) 空间复杂度为O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null) return true;
    let current = head;
    let arr = [];
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    let l = 0,
        r = arr.length - 1;
    while (l < r) {
        if (arr[l] !== arr[r]) return false;
        l++;
        r--;
    }
    return true;
};
// @lc code=end