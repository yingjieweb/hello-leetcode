/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  const reversedStrArr = Math.abs(x).toString().split("").reverse();
  const firstNotZeroIndex = reversedStrArr.findIndex((item) => item !== "0");
  const reversedStr = reversedStrArr.slice(firstNotZeroIndex).join("");
  const result = reversedStr * (isNegative ? -1 : 1);
  // 检查整数溢出或下溢
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
};
// @lc code=end
