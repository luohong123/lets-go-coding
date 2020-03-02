---
{ 'title': '包含min函数的栈' }
---

## 题目

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的 min 函数（时间复杂度应为 O（1））。

## 方法一：

```js
var stack = []
function push(node) {
  stack.push(node)
}
function pop() {
  return stack.pop()
}
function top() {
  return stack[0]
}
function min() {
  return Math.min.apply(this, stack)
}
```

### 测试用例

```js
```

### 复杂度分析

- 时间复杂度

- 空间复杂度

## 考察点

## 参考资料
