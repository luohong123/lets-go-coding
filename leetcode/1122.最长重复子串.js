/*
 * @Author: qingcheng
 * @Date: 2020-05-08 17:54:10
 * @LastEditors: qingcheng
 * @LastEditTime: 2020-05-09 09:49:41
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 最长重复子串
 *
 * https://leetcode-cn.com/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (61.05%)
 * Likes:    45
 * Dislikes: 0
 * Total Accepted:    14.8K
 * Total Submissions: 22.4K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * 给你两个数组，arr1 和 arr2，
 * 
 * 
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 
 * 
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1
 * 的末尾。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i] 各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 * 
 * 
 */

// @lc code=start
/**
 * 解决思路: 使用哈希表，把arr2的值通过new Map设置为哈希表，
 * key表示值，value表示索引。再通过排序方法赋值对比进行升序排序
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let lookup = new Map();
    let N = arr2.length;
    arr2.forEach((a, i) => {
        lookup.set(a, i);
    })
    // compareFn 如果第一个参数小于第二个参数，则返回负值；
    // 如果它们相等，则返回零；否则返回正值。
    // 如果省略，则按ASCII字符【升序】对元素进行排序。
    return arr1.sort((a, b) => {
        // arr1的值的如果正好等于arr的值, 那么a赋值为arr2的值，
        // 否则放到数组末尾，以N为参考，
        // 也就是arr2数组长度加上本身，然后再相减进行升序排序
        a = lookup.has(a) ? lookup.get(a) : N + a;
        // 
        b = lookup.has(b) ? lookup.get(b) : N + b;
        // 要比较数字而非字符串，比较函数可以简单的以 a 减 b，
        // 如下的函数将会将数组升序排列
        return a - b;
    })
};
// @lc code=end