/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let additional = 0

  for (let i = digits.length - 1; i >= 0; i--) {
    const initAddOne = i === digits.length - 1 ? 1 : 0
    const current = digits[i] + additional + initAddOne
    additional = Math.floor(current / 10)
    digits[i] = current % 10
  }

  if (additional === 1) {
    digits.unshift(1)
  }
  
  return digits;
};
// @lc code=end
