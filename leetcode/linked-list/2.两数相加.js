/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function LinkedList() {
  //Node类声明
  let Node = function(element) {
    this.element = element
    this.next = null
  }
  //初始化链表长度
  let length = 0
  //初始化第一个元素
  let head = null
  this.append = function(element) {
    //初始化添加的Node实例
    let node = new Node(element),
      current
    if (head === null) {
      //第一个Node实例进入链表，之后在这个LinkedList实例中head就不再是null了
      head = node
    } else {
      current = head
      //循环链表知道找到最后一项，循环结束current指向链表最后一项元素
      while (current.next) {
        current = current.next
      }
      //找到最后一项元素后，将他的next属性指向新元素node,j建立链接
      current.next = node
    }
    //更新链表长度
    length++
  }
  this.insert = function(position, element) {
    //检查是否越界，超过链表长度或是小于0肯定不符合逻辑的
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0
      if (position === 0) {
        //在第一个位置添加
        node.next = current
        head = node
      } else {
        //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      //更新链表长度
      length++
      return true
    } else {
      return false
    }
  }
  this.removeAt = function(position) {
    //检查是否越界，超过链表长度或是小于0肯定不符合逻辑的
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0
      //移除第一个元素
      if (position === 0) {
        //移除第一项，相当于head=null;
        head = current.next
      } else {
        //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
        while (index++ < position) {
          previous = current
          current = current.next
        }
        //链接previous和current的下一个元素，也就是把current移除了
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.indexOf = function(element) {
    let current = head,
      index = 0
    //循环链表找到元素位置
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  this.remove = function(element) {
    //调用已经声明过的indexOf和removeAt方法
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  this.isEmpty = function() {
    return length === 0
  }
  this.size = function() {
    return length
  }
  this.getHead = function() {
    return head
  }
  this.toString = function() {
    let current = head,
      string = ''
    while (current) {
      string += current.element + (current.next ? ', ' : '')
      current = current.next
    }
    return string
  }
  this.print = function() {
    console.log(this.toString())
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
  var List = new ListNode(0)
  var head = List
  var sum = 0
  var carry = 0

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val
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
console.log('result: ' + addTwoNumbers([2, 4, 3], [5, 6, 4]))
