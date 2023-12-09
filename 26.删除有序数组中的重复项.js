/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// @methods 1: 非最优解
// var removeDuplicates = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i+1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length
// };

// @method 2
var removeDuplicates = function (nums) {
  let i = 0,
    j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }

  return i + 1;
};
// @lc code=end
