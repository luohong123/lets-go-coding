/*
 * @Author: lh
 * @Date: 2020-06-04 15:48:03
 * @LastEditors: lh
 * @LastEditTime: 2020-06-04 16:16:29
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (27.59%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    34K
 * Total Submissions: 110.9K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 * 
 * 
 */

// @lc code=start
/**
 * 解决思路: 使用滑动窗口.
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s || !words || !words.length) return [];
    let windows = {}, // 存储s子串
        needs = {}, // 存储words
        oneWordLen = words[0].length; // 只循环一个单词的长度
    for (let w of words) {
        needs[w] ? needs[w]++ : needs[w] = 1;
    }
    let l = 0, r = 0, count = 0,needsKeyLen = Object.keys(needs).length,
        ans = [];
    for (let i = 0; i < oneWordLen; i++) {
        windows = {};
        r = l = i;
        count = 0;
        while (r <= s.length - oneWordLen) {
            let w1 = s.slice(r, r + oneWordLen);
            r += oneWordLen;
            if (!needs[w1]) {
                windows = {};
                l = r;
                count = 0;
                continue;
            }
            windows[w1] ? windows[w1]++ : windows[w1] = 1;
            if (windows[w1] === needs[w1]) count++;
            while (count === needsKeyLen) {
                if (r - l === oneWordLen * words.length) ans.push(l);
                let w2 = s.slice(l, l + oneWordLen);
                l += oneWordLen;
                if (needs[w2]) {
                    windows[w2]--;
                    if (windows[w2] < needs[w2]) count--;
                }
            }
        }
    }
    return ans;
};
// @lc code=end