/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedNums = nums1.concat(nums2).sort((a, b) => a - b);
  const len = mergedNums.length;
  return len % 2 === 0
    ? (mergedNums[len / 2 - 1] + mergedNums[len / 2]) / 2
    : mergedNums[Math.floor(len / 2)];
};
// @lc code=end
