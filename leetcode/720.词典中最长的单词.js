/*
 * @Author: lh
 * @Date: 2020-07-01 09:46:46
 * @LastEditors: lh
 * @LastEditTime: 2020-07-02 09:40:50
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 *
 * https://leetcode-cn.com/problems/longest-word-in-dictionary/description/
 *
 * algorithms
 * Easy (43.62%)
 * Likes:    85
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 19.2K
 * Testcase Example:  '["w","wo","wor","worl","world"]'
 *
 * 
 * 给出一个字符串数组words组成的一本英语词典。从中找出最长的一个单词，该单词是由words词典中其他单词逐步添加一个字母组成。若其中有多个可行的答案，则返回答案中字典序最小的单词。
 * 
 * 若无答案，则返回空字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: 
 * words = ["w","wo","wor","worl", "world"]
 * 输出: "world"
 * 解释: 
 * 单词"world"可由"w", "wo", "wor", 和 "worl"添加一个字母组成。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: 
 * words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 * 输出: "apple"
 * 解释: 
 * "apply"和"apple"都能由词典中的单词组成。但是"apple"得字典序小于"apply"。
 * 
 * 
 * 注意:
 * 
 * 
 * 所有输入的字符串都只包含小写字母。
 * words数组长度范围为[1,1000]。
 * words[i]的长度范围为[1,30]。
 * 
 * 
 */

// @lc code=start
/**
 * 方法一: 暴力法
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    if (!words) return '';
    // 符合的字符
    let ans = '';
    let table = new Set(words);
    for (let word of words) {
        // 剪枝
        if (word.length < ans.length || (word.length === ans.length && word > ans)) continue;
        let best = true;
        for (let k = 1; k < word.length; k++) {
            if (!table.has(word.substring(0, k)))
                best = false;
        }
        if (best) ans = word;
    }
    return ans;
};
/**
 * 方法二: 字典树 + dfs深度优先搜索
 * 英文单词字母一共🈶️26个
 * @param {*} words 
 */
var Trie = function () {
    this.root = {};
    this.end = 0;
    this.words = [];
}
Node cur = root;
for (char c: word.toCharArray()) {
    cur.children.putIfAbsent(c, new Node(c));
    cur = cur.children.get(c);
}
cur.end = index;

Trie.prototype.insert = function (word,index) {
    if (!words) return;
    let node = this.root;
    for (let c of words) {
        if (!node.next[c]) {
            node.next[c] = new TrieNode();
        }
        node = node.next[c];
    }
    node.isEnd = true;
}
Trie.prototype.dfs = function () {
    let ans = '';
    let stack = [];
    stack.push(this.root);
    while (!stack.length > 0) {
        let node = stack.pop();
        if (node.end > 0 || node == this.root) {
            if (node !== this.root) {
                let word = words[node.end - 1];
                if (word.length > ans.length || word.length === ans.length && word.localCompare(ans) < 0) {
                    ans = word;
                }
            }
            for (let c of node.children) {
                stack.push(c);
            }
        }
    }
    return ans;
}
var longestWord = function (words) {
    if (!words) return '';
    // 构建字典树
    for (let i = 0; i < words.length; i++) {
        let trie = new Trie()
        trie.insert(words[i]);
    }
    // dfs搜索
    let res = null;
    res = trie.dfs(1, res, 0);
    return res;
}
// @lc code=end