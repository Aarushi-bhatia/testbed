/**
 * Capitalize the first character of a string.
 *
 * @param {string} str string to capitalize
 * @returns {string} string with its first character capitalized
 */
function capitalize(str) {
  if (str.length === 0) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverse the characters in a string.
 *
 * @param {string} str string to reverse
 * @returns {string} reversed string
 */
function reverse(str) {
  return str.split('').reverse().join('');
}

/**
 * Shorten a string and add an ellipsis when it exceeds the supplied limit.
 * The limit applies to the portion before the ellipsis.
 *
 * @param {string} str string to shorten
 * @param {number} maxLength maximum number of original characters to keep
 * @returns {string} original or shortened string
 */
function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return `${str.slice(0, maxLength)}...`;
}

/**
 * Check whether a string reads identically in reverse.
 * This baseline comparison deliberately preserves case, spaces, and punctuation.
 *
 * @param {string} str string to inspect
 * @returns {boolean} whether the string is a palindrome
 */
function isPalindrome(str) {
  return str === reverse(str);
}

module.exports = {
  capitalize,
  reverse,
  truncate,
  isPalindrome
};
