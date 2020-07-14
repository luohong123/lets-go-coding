/*
 * @Author: lh
 * @Date: 2020-07-02 09:43:44
 * @LastEditors: lh
 * @LastEditTime: 2020-07-02 09:56:04
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (67.31%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    153.3K
 * Total Submissions: 217K
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 * 
 */

// @lc code=start
/**
 * 解决思路: 使用双指针，当left和right相遇时，说明已交换成功
 * 时间复杂度 O(N) 空间复杂度O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length;
    if (!s) return false;
    let left = 0,
        right = len - 1;
    while (left < right) {
        let temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }
    return s;
};
// @lc code=end