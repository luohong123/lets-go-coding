/*
 * @Author: honghong
 * @Date: 2020-03-07 08:51:24
 * @LastEditors: honghong
 * @LastEditTime: 2020-03-07 09:37:24
 * @Description:
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 *
 * https://leetcode-cn.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (59.72%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    39.8K
 * Total Submissions: 62.2K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用队列实现栈的下列操作：
 *
 *
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 *
 *
 * 注意:
 *
 *
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty
 * 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 *
 *
 */

/**
 * 题解
 * （一个队列， 压入 -  O ( n ) O(n)， 弹出 -  O ( 1 ) O(1)）
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue1 = [];
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.push(x)
  let size = this.queue1.length
  while (size > 1) {
    this.queue1.push(this.queue1.pop())
    size--;
  }
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let result = this.queue1[this.queue1.length-1];  
  this.queue1.length = this.queue1.length-1;
  return result;
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.queue1.length === 0) return -1
  return this.queue1[this.queue1.length - 1]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue1.length
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
