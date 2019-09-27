---
{ 'title': '算法分类' }
---

算法和数据结构的关系，数据结构是算法的基础，算法需要依赖某种数据结构来实现
，算法的操作对象是数据结构，数据结构的设计是为了选择存储方式。

## 算法 Algorithm

- General Coding In-order/Pre-order/Post-order traversal Greedy
- Recursion/Backtrace
- Breadth-first search
- Depth-first search
- Divide and Conquer
- Dynamic Programming
- Binary Search
- Graph

## 算法应用

1.  找⼥朋友

- 如果能后悔选之前的:O(n);

- 如果不不能后悔悔，则⽤用 37% 法则。

2.  ⼯作日程规划
3.  扑克游戏
4.  加密货币，比特币
5.  适用范围: 找房⼦、买东⻄、换⼯作等。

> 以下列举了常用的算法

### 参考阅读:

https://www.jianshu.com/p/9c5c3f839c47
https://blog.csdn.net/s1314_JHC/article/details/78233055

## 如何有效学习和训练算法和数据结构

- 看书
  《异类—不⼀一样的成功启示录》马尔科姆·格拉德威尔

### 精通⼀个领域

### Chunk it up(切碎知识点)

- 庖丁解⽜
- 脉络连接

### Deliberate practicing(刻意练习)

- 练习缺陷、不舒服、弱点地⽅
- 不爽、枯燥
- ⽣活中例例⼦子:乒乓球、台球、游戏等等

1. 除了“做熟悉和会做的题目”之外，去刻意练习⾃己不熟悉的算法和数据结构。
   不要为了切题而切题
2. 做过的题目后续要返回再复习

### Feedback(获得反馈)

#### 即时反馈

- 主动型反馈(⾃自⼰己去找)
- ⾼高⼿手代码 (GitHub, LeetCode, etc.)
- 第⼀一视⻆角直播

#### 被动式反馈(⾼高⼿手给你指点)

- code review
- 教练看你打，给你反馈

#### 切题四件套

1. Clarification(询问题⽬目细节、边界条件、可能的极端错误情况)
2. Possible Solution(所有可能的解法都和⾯面试官沟通⼀一遍)
   • Compare Time & Space Complexity(时间复杂度&空间复杂度)

   • Optimal Solution(最优解)

3. Coding(写代码)
4. Test Cases(测试⽤用例例)

## 算法复杂度

- 时间复杂度
- 空间复杂度

### 什么是 Big O?

- O(1): Constant Complexity: Constant 常数复杂度
- O(log n): Logarithmic Complexity: 对数复杂度
- O(n): Linear Complexity: 线性时间复杂度
- O(n^2): N square Complexity 平⽅方
- O(n^3): N square Complexity ⽴立⽅方 - O(2^n): Exponential Growth 指数
- O(n!): Factorial 阶乘

### 主定理

https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms) https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%AE%9A%E7%90%86

### leetcode 练习方式

https://leetcode.com/problemset/all/

- 坚持、刻意练习
- 练习缺陷、弱点地⽅方
- 不不舒服、不不爽、枯燥

## 其他

1. Priority Queue 一个任务的密度 = 重要程度/完成时间
2. Kelly Formula 凯利利公式
3. Game Theory 博弈论

拜托，⾯试别再问我斐波那契数列了了!!!
原文链接: https://mp.weixin.qq.com/s/3LR-iVC4zgj0tGhZ780PcQ
姐妹篇:

1.  《拜托，⾯面试别再问我 TopK 了了!!!》 https://mp.weixin.qq.com/s/FFsvWXiaZK96PtUg-mmtEw
2.  《拜托，⾯面试别再让我数 1 了了!!!》 https://mp.weixin.qq.com/s/A3dLW92SNag8lw7vrQiEHQ
    算法和数据结构是内⼒
    重在练习(修行)

## 环境准备

1. Keyboard set-up
2. iTerms + Oh-my-zsh
3. IDE (Pycharm, IntelliJ, Webstorm, GoLand) Editors (VS Code, Sublime, Atom, VIM, etc)

## 学习途径

- [【牛客网-剑指 offer】](https://www.nowcoder.com/ta/coding-interviews?page=1)
- [【leetcode】](https://leetcode.com/problemset/all/)
- [【极客时间-算法面试通关 40 讲】](https://time.geekbang.org/course/detail/130-41518?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu)
- [【ConardLi-awesome-coding-js】](https://github.com/ConardLi/awesome-coding-js)
- [【书籍-《剑指 offer》】]()
- [【书籍-《图解算法》】]()
- [【书籍-《学习 JavaScript 数据结构与算法》】]()

## 代码片段

### 反转链表 - reverse linked list

```python
def reverseList(self, head):
    cur, prev = head, None
    while cur:
        cur.next, prev, cur = prev, cur, cur.next
    return prev
```

### 链表交换相邻元素

```python
def swapPairs(self, head):
    pre, pre.next = self, head
    while pre.next and pre.next.next:
        a = pre.next
        b = a.next
        pre.next, b.next, a.next = b, a, b.next
        pre = a
    return self.next
```

## 总结

会用到一些 es6 的语法
