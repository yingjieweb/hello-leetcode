/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// @methods 1: 这种方法时间复杂度较高，非最优解
// var maxArea = function (height) {
//   let result = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const curResult = Math.min(height[i], height[j]) * (j - i)
//       result = Math.max(result, curResult)
//     }
//   }
//   return result
// };

// @methods 2: 置遍历一次，时间复杂度 O(n)
var maxArea = function(height) {
  let res = 0
  for (let i = 0, j = height.length - 1; i < j; ) {
      res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
      height[i] < height[j] ? i++ : j--
  }
  return res
};
// @lc code=end
