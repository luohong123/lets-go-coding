(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"动态规划-dynamic-programming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-dynamic-programming","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态规划(Dynamic Programming)")]),t._v(" "),a("ol",[a("li",[t._v("递归+记忆化 —> 递推")]),t._v(" "),a("li",[t._v("状态的定义:opt[n], dp[n], fib[n]")]),t._v(" "),a("li",[t._v("状态转移⽅方程:opt[n] = best_of(opt[n-1], opt[n-2], ...) 4. 最优⼦子结构")])]),t._v(" "),a("h2",{attrs:{id:"斐波那契数列列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数列列","aria-hidden":"true"}},[t._v("#")]),t._v(" 斐波那契数列列")]),t._v(" "),a("p",[t._v("0, 1, 1, 2, 3, 5, 8, 13, 21, ...")]),t._v(" "),a("p",[t._v("递推公式:F[n] = F[n-1] + F[n-2]")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" fib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" ? n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"递归-记忆化-递推"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归-记忆化-递推","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归 + 记忆化 ==> 递推")]),t._v(" "),a("p",[t._v("递推公式: F[n] = F[n - 1] + F[n -2]")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"动态规划-vs-回溯-vs-贪⼼心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-vs-回溯-vs-贪⼼心算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态规划 vs 回溯 vs 贪⼼心算法")]),t._v(" "),a("ul",[a("li",[t._v("回溯(递归)— 重复计算")]),t._v(" "),a("li",[t._v("贪⼼算法 — 永远局部最优")]),t._v(" "),a("li",[t._v("动态规划 — 记录局部最优子结构 / 多种记录值")])]),t._v(" "),a("h2",{attrs:{id:"实战题⽬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战题⽬","aria-hidden":"true"}},[t._v("#")]),t._v(" 实战题⽬")]),t._v(" "),a("ol",[a("li",[t._v("https://leetcode.com/problems/climbing-stairs/description/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/triangle/description/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/maximum-product-subarray/description/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/best-time-to-buy-and-sell-stock/#/description")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/longest-increasing-subsequence")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/coin-change/ 12.https://leetcode.com/problems/edit-distance/")])])])}),[],!1,null,null,null);s.default=n.exports}}]);