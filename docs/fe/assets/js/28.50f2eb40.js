(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{234:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Trie")]),t._v(" "),a("ol",[a("li",[t._v("Trie 树的数据结构")]),t._v(" "),a("li",[t._v("Trie 树的核⼼心思想")]),t._v(" "),a("li",[t._v("Trie 树的基本性质")])]),t._v(" "),a("h2",{attrs:{id:"基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本结构")]),t._v(" "),a("p",[t._v("Trie 树，即字典树，又称单词查找树或键树，是一种树形结构，是一种哈希树的变种。典型应⽤用是⽤用于统计和排序⼤量的字符串(但不仅限于字符串)，所以经常被搜索引擎系统⽤用于⽂文本词频统计。")]),t._v(" "),a("p",[t._v("它的优点是:最⼤限度地减少⽆谓的字符串比较，查询效率⽐哈希表高。")]),t._v(" "),a("h2",{attrs:{id:"核心思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心思想","aria-hidden":"true"}},[t._v("#")]),t._v(" 核心思想")]),t._v(" "),a("p",[t._v("Trie 的核心思想是空间换时间。利⽤字符串的公共前缀来降低查询时间的开销以达到提高效率的⽬的。")]),t._v(" "),a("h2",{attrs:{id:"字典树代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典树代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 字典树代码")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("static final "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" ALPHABET_SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\nstatic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TrieNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new TrieNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ALPHABET_SIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    boolean isEndOfWord "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" false\n    TrieNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        isEndOfWord "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" false\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ALPHABET_SIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("null\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Trie node class")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ALPHABET_SIZE\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# isEndOfWord is True if node represent")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the end of the word")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isEndOfWord "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"基本性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本性质","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本性质")]),t._v(" "),a("ol",[a("li",[t._v("根节点不不包含字符，除根节点外每⼀一个节点都只包含⼀一 个字符。")]),t._v(" "),a("li",[t._v("从根节点到某⼀一节点，路路径上经过的字符连接起来，为 该节点对应的字符串串。")]),t._v(" "),a("li",[t._v("每个节点的所有⼦子节点包含的字符都不不相同。")])]),t._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("ul",[a("li",[t._v("搜索框模糊查询\n"),a("h2",{attrs:{id:"实战题⽬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战题⽬","aria-hidden":"true"}},[t._v("#")]),t._v(" 实战题⽬")])])]),t._v(" "),a("ol",[a("li",[t._v("https://leetcode.com/problems/implement-trie-prefix-tree/#/description")]),t._v(" "),a("li",[t._v("https://leetcode.com/problems/word-search-ii/")])])])}),[],!1,null,null,null);s.default=e.exports}}]);