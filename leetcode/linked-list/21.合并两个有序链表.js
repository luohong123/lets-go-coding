/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
        this.val = val;
      this.next = null;
 }
l1={
    val:1,
    next:{
        val:2,
        next:{
            val:4,
            next:null
        }
    }
}
l2={
    val:1,
    next:{
        val:3,
        next:{
            val:4,
            next:null
        }
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0)
    let current=dummy
    while(l1!==null&&l2!==null){
        if(l1.val<=l2.val){
            current.next=l1;
            l1=l1.next
        }else{
            current.next=l2;
            l2=l2.next;
        }
        current=current.next
    }
    if(l1!==null){
        current.next=l1
    }
    if(l2!==null){
        current.next=l2
    }
    // console.log(dummy.next)
    return dummy.next
};

mergeTwoLists(l1,l2)