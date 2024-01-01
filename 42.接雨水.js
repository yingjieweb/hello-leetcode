/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const maxFloorCount = Math.max(...height)
  let isStartTrap = false, tempCount = 0, trapSumCount = 0
  for (let curFloor = 1; curFloor <= maxFloorCount; curFloor++) {
    tempCount = 0
    isStartTrap = false
    for (let i = 0; i < height.length; i++) {
      if (height[i] >= curFloor) {
        trapSumCount += tempCount
        tempCount = 0
        isStartTrap = true
      }
      if (isStartTrap && height[i] < curFloor) {
        tempCount += 1
      }
    }
  }
  return trapSumCount
};
// @lc code=end

