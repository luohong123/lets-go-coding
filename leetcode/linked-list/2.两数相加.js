/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 逆序储存
 *
 *
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0)
  var head = List
  var sum = 0
  var carry = 0

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum +l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum = sum + l2.val
      l2 = l2.next
    }
    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    }

    head.next = new ListNode(sum)
    head = head.next

    sum = carry
    carry = 0
  }

  return List.next
}
console.log('result: ' + addTwoNumbers(ListNode([2, 4, 3]), ListNode([5, 6, 4])))
