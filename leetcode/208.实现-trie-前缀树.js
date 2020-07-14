/*
 * @Author: lh
 * @Date: 2020-06-28 16:37:37
 * @LastEditors: lh
 * @LastEditTime: 2020-07-01 09:45:02
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 *
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (60.60%)
 * Likes:    329
 * Dislikes: 0
 * Total Accepted:    41.5K
 * Total Submissions: 61.4K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 
 * 示例:
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // 返回 true
 * trie.search("app");     // 返回 false
 * trie.startsWith("app"); // 返回 true
 * trie.insert("app");   
 * trie.search("app");     // 返回 true
 * 
 * 说明:
 * 
 * 
 * 你可以假设所有的输入都是由小写字母 a-z 构成的。
 * 保证所有输入均为非空字符串。
 * 
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var TrieNode = function () {
    this.next = {};
    // 当前节点是否可以作为一个单词的结束位置
    this.isEnd = false;
}
var Trie = function () {
    this.root = new TrieNode();
};
/**
 * 在trie中插入一个单词
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (!word) return false;
    let node = this.root;
    for (let c of word) {
        if (!node.next[c]) {
            node.next[c] = new TrieNode();
        }
        node = node.next[c];
    }
    node.isEnd = true;
};
/**
 * 返回单词是否在trie中
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    if (!word) return false;
    let node = this.root;
    for (let c of word) {
        if (node.next[c]) {
            node = node.next[c];
        } else {
            return false;
        }
    }
    return node.isEnd;
};

/**
 * 返回trie中是否有以给定前缀开头的单词。
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if (!prefix) return null;
    let node = this.root;
    for (let c of prefix) {
        if (node.next[c]) {
            node = node.next[c];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end