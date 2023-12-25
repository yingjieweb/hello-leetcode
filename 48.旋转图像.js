/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  const squareLength = matrix.length
  const result = new Array(squareLength).fill(0).map(() => new Array(squareLength).fill(0));

  for (let i = 0; i < squareLength; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      result[i][j] = matrix[squareLength - 1 - j][i]
    }
  }
  
  for (let i = 0; i < squareLength; i++) {
    for (let j = 0; j < squareLength; j++) {
      matrix[i][j] = result[i][j]
    }
  }
};

rotate(input1)
// @lc code=end

