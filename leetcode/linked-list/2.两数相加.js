/*
 * @Author: luohong
 * @Date: 2019-08-02 14:49:27
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-15 10:57:12
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null
    }
  }
}

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
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while(l1!==null||l2!==null||sum>0){

      if(l1!==null){
          sum = sum + l1.val;
          l1 = l1.next;
      }
      if(l2!==null){
          sum = sum + l2.val;
          l2 = l2.next;
      }
      if(sum>=10){
          carry = 1;
          sum = sum - 10;
      }

      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;

  }

  return List.next;
}
console.dir('result: ' + addTwoNumbers(l1, l2))
