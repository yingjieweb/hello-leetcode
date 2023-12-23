/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === str[right]) {
      left--;
      right++;
    }
    if (res.length < right - left - 1) {
      res = s.substring(left + 1, right);
    }
  }
  return res;
};
// @lc code=end

