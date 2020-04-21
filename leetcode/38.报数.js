/*
 * @Author: qingcheng
 * @Date: 2020-04-16 23:01:37
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-04-16 23:02:15
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (51.86%)
 * Likes:    448
 * Dislikes: 0
 * Total Accepted:    88.5K
 * Total Submissions: 161.3K
 * Testcase Example:  '1'
 *
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
 * 
 * 注意：整数序列中的每一项将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 解释：这是一个基本样例。
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 解释：当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 =
 * 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1){
        return n.toString()
    }
     // 该正则进行相同分组，调用match方法得出接下来用的数组
    let tempArr = countAndSay(n-1).match(/(\d)\1*/g);
    let result = "";
    // 循环上面得到的数组，然后取每个的长度（题里说的几个），还有第一个数字（题里说的哪个数）
    tempArr.forEach((item) => {            
        let lth = item.length.toString()
        let num = item.substring(0,1)
        result = result+lth+num
    })
    return result
};
// @lc code=end

