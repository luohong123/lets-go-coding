/*
 * @Author: honghong
 * @Date: 2020-03-06 09:07:09
 * @LastEditors: honghong
 * @LastEditTime: 2020-03-06 10:43:16
 * @Description:
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 *
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/description/
 *
 * algorithms
 * Easy (60.78%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    34.6K
 * Total Submissions: 54.6K
 * Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用栈实现队列的下列操作：
 *
 *
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 *
 *
 * 示例:
 *
 * MyQueue queue = new MyQueue();
 *
 * queue.push(1);
 * queue.push(2);
 * queue.peek();  // 返回 1
 * queue.pop();   // 返回 1
 * queue.empty(); // 返回 false
 *
 * 说明:
 *
 *
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty
 * 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 *
 *
 */

/**
 * 题解：
 * 由于栈是后进先出，队列是先进先出，那么声明两个栈，
 * 一个按顺序压入栈为stackPush，再把stackPush栈按顺序全部倒入stackPop栈，
 * stackPop用来弹出栈，就能实现队列的效果了。
 */
// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stackPush = []
  this.stackPop = []
}
/**
 * push栈向pop栈倒数据,
 * 确保stackPop为空，stackPush一次性倒完
 */
MyQueue.prototype.pushToPop = function() {
  if (this.stackPop.length === 0) {
    while (this.stackPush.length) {
      this.stackPop.push(this.stackPush.pop())
    }
  }
}
/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackPush.push(x)
  this.pushToPop()
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stackPush.length === 0 && this.stackPop.length === 0) {
    throw Error('Queue is empty!')
  }
  this.pushToPop()
  return this.stackPop.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stackPush.length === 0 && this.stackPop.length === 0) {
    throw Error('Queue is empty!')
  }
  this.pushToPop()
  // 这里注意一下，用js的shift()方法无法通过，因为题目已经说了
  // 只有用 push to top, peek/pop from top, size, 和 is empty 操作才是合法的。
  return this.stackPop[this.stackPop.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  // 当length = 0 时，0 隐式转换为 false，取反为true
  return !this.stackPush.length && !this.stackPop.length
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
