/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      start = start === -1 ? i : start;
      end = i;
    }
  }

  return [start, end];
};

searchRange([5, 7, 7, 8, 8, 10], 8);
// @lc code=end
