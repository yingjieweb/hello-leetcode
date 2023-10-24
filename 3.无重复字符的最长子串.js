/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let temp = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) {
      temp.push(s[i]);
    } else {
      i = i - temp.length;
      temp = [];
    }
    max = Math.max(max, temp.length);
  }
  return max;
};
// @lc code=end
