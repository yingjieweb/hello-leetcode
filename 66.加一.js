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

  const temp = digits.reverse().map((item, index) => {
    const initAddOne = index === 0 ? 1 : 0
    const current = item + additional + initAddOne
    additional = Math.floor(current / 10)
    return current % 10
  })

  if (additional === 1) {
    temp.push(1)
  }
  
  return temp.reverse();
};
// @lc code=end
