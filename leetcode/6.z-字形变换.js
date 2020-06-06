/*
 * @Author: qingcheng
 * @Date: 2020-04-29 17:21:53
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-04-29 18:13:09
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (44.24%)
 * Likes:    647
 * Dislikes: 0
 * Total Accepted:    121.7K
 * Total Submissions: 255.6K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */

// @lc code=start
/**
 * 方法一：思路是如何可以排列出Z字形呢？遍历字符串，创建一个数组rows，
 * 长度为numsRows，loc为当前字符串的位置，down表示往下走还是往右走，
 * 如果down为true，表示往下走，那么loc+=1;如果down为false，表示往又走，
 * loc-=1,当loc为0表示从下走到顶部或刚刚开始走时down取反，因为down默认是false，
 * 为0时改完true，loc == numRows - 1表示在底部，当走到底部时取反改完false表示
 * 不能往下走了。遍历完之后，把数组按照顺序拼接字符串即可。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let len = Math.min(numRows, s.length); // 如果字符长度比行数还少，那么取字符长度
    let rows = [];
   for(let i = 0; i < len; i++) { // 如3行初始化为 ['','','']
       rows[i] = '';
   }
   let loc = 0; // 当前字符串的下标
   // 如为true 则loc+=1，字符数组下标向后移动
   // 如为false 则loc-=1,字符数组下标向前移动
   let down = false; 

   for(let c of s) {
       rows[loc] += c;
       // 顶部或者底部，down取反
       if(loc == 0 || loc == numRows - 1) down = !down;
       loc += down ? 1 : -1;
   }
   let ans = '';
   for(let row of rows) { // 循环字符数组，按顺序拼接
       ans += row;
   }
   return ans;
    
};
// @lc code=end

