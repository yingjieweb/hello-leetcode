/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// @methods 1: 这种方法时间复杂度较高，includes 相当于每次便利一遍数组，非最优解
// var firstMissingPositive = function (nums) {
//   let i = 1;
//   while (i <= nums.length) {
//     if (!nums.includes(i)) {
//       return i;
//     } else {
//       i++;
//     }
//   }
//   return i;
// };

// @methods 2: 建议优化
var firstMissingPositive = function (nums) {
  const sortableNums = Array.from(new Set(nums)).sort((a, b) => a - b);

  const firstPositiveNumberIndex = sortableNums.findIndex((num) => num > 0);
  if (firstPositiveNumberIndex === -1) return 1;
  const positiveNums = sortableNums.slice(firstPositiveNumberIndex);

  let result = 1;
  for (let index = 0; index < positiveNums.length; index++) {
    if (positiveNums[index] !== index + 1) {
      return index + 1;
    } else {
      result = index + 2;
    }
  }
  return result;
};

// @lc code=end
