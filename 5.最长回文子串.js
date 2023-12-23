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
var longestPalindrome = function (s) {
  if (s?.length === 0) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    // Find the longest palindromic substring centered at i
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > end - start + 1) {
        start = left;
        end = right;
      }
      left--;
      right++;
    }

    // Find the longest palindromic substring centered at i and i+1
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > end - start + 1) {
        start = left;
        end = right;
      }
      left--;
      right++;
    }
  }

  return s.substring(start, end + 1);
};
// @lc code=end
