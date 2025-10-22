const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const charS1 = [...s1].reduce(
    (acc, char) => ((acc[char] = (acc[char] || 0) + 1), acc),
    {}
  );
  const charS2 = [...s2].reduce(
    (acc, char) => ((acc[char] = (acc[char] || 0) + 1), acc),
    {}
  );
  return Object.keys(charS1).reduce(
    (sum, char) => sum + Math.min(charS1[char], charS2[char] || 0),
    0
  );
}

module.exports = {
  getCommonCharacterCount,
};
