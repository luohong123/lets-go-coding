/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let len = strs.length;
    if (len == 0) return ''
    let prefix = strs[0]
    for (var i = 1; i < len; i++) {
        // 遍历 第 i 个字符，找到最长公共前缀
        while (strs[i].indexOf(prefix) !== 0) {
            // 从最后一个字符开始截取
            prefix = prefix.substring(0, prefix.length - 1)
            // 直到是一个空字符串时， 结束循环
            if (prefix == '') return ''
        }
    }
    return prefix
};

longestCommonPrefix(["flower", "flow", "flight"]) // fl