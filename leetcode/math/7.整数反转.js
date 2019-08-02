/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var resultArr = [];
    var intToStr = x.toString();
    for(var i = intToStr.length-1;i > 0;i--){
        resultArr.push(intToStr[i]);
    }
    if(intToStr[0] == "-"){
        resultArr.unshift("-");
    }
    resultArr.push(intToStr[0]);
    var resultNum = parseInt(resultArr.join(""));
    if(resultNum <= Math.pow(-2,31) || resultNum >= Math.pow(2,31) - 1 ){
        return 0;
    }
    return resultNum
};

