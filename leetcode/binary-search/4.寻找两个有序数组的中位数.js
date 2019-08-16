/*
 * @Author: luohong
 * @Date: 2019-08-09 09:26:13
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 09:56:59
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var numbers =nums1.concat(nums2).sort(function(a,b){
        return a-b
    });
    let len = numbers.length
    let mid = Math.floor(len/2)
    let median
    if(len%2==0){
        median= ((numbers[mid]+numbers[mid-1])/2).toFixed(1)
    }else{
        median= numbers[mid].toFixed(1)
    }
    console.log(median)
    return median
    
};
findMedianSortedArrays([1,2],[4])
findMedianSortedArrays([1,2],[3,4])
findMedianSortedArrays([1,3],[2])
