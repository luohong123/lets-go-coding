/*
 * @Author: qingcheng
 * @Date: 2020-04-28 23:23:29
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-04-28 23:56:32
 * @Description
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (39.86%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    74K
 * Total Submissions: 165.6K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * 方法一：第一步思路是把字符作为key,每个字符出现次数作为value，
 * 建立好哈希表后，按照再循环对象，第一个value值为1时，此时的key
 * 再和s字符对比，从而找出索引
 * 考点是 哈希表 字符串
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if(obj.hasOwnProperty(c)) {
            obj[c] += 1;
        } else{
            obj[c] = 1;
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(obj[s.charAt(i)] === 1) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

