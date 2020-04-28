/*
 * @Author: qingcheng
 * @Date: 2020-04-28 22:49:38
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-04-28 23:18:37
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (45.57%)
 * Likes:    187
 * Dislikes: 0
 * Total Accepted:    35.7K
 * Total Submissions: 75.4K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 
 * 示例 1:
 * 
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "foo", t = "bar"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: s = "paper", t = "title"
 * 输出: true
 * 
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 * 
 */

// @lc code=start
/**
 * 方法一： 映射，我理解为js中的对象，键key、值value首先
 * 判断s、t两个字符长度是否相等，如果不相等肯定不是同构的，如果
 * 相等，那么s的每个字符作为key,t的每一个字符作为key,同时按照
 * 顺序判断key是否等于value,对应同样的两个字符，只需要判断key
 * value是否相等即可；对应未存在的key，添加key到对象中
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphicIsHelper = function(s, t) {
    let sLen = s.length;
    let obj = {} ,c1, c2;
    for (let i = 0; i < sLen; i++) {
        c1 = s.charAt(i);
        c2 = t.charAt(i);
        if(obj.hasOwnProperty(c1)) {
            if(obj[c1] !== c2) {
                return false;
            }
        } else {
            obj[c1] = c2
        }
    }
    return true;
}
var isIsomorphic = function(s, t) {
 return isIsomorphicIsHelper(s,t) && isIsomorphicIsHelper(t,s); 
};
// @lc code=end

