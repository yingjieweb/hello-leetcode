/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  
  const result = [];
  let top = 0,
      bottom = matrix.length - 1,
      left = 0,
      right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
      // Traverse right
      for (let i = left; i <= right; i++) {
          result.push(matrix[top][i]);
      }
      top++;
      
      // Traverse down
      for (let i = top; i <= bottom; i++) {
          result.push(matrix[i][right]);
      }
      right--;
      
      // Check if we have traversed all rows
      if (top <= bottom) {
          // Traverse left
          for (let i = right; i >= left; i--) {
              result.push(matrix[bottom][i]);
          }
          bottom--;
      }
      
      // Check if we have traversed all columns
      if (left <= right) {
          // Traverse up
          for (let i = bottom; i >= top; i--) {
              result.push(matrix[i][left]);
          }
          left++;
      }
  }
  
  return result;
};

// @lc code=end

