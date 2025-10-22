const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNum = String(n);
  let maxNum = 0;
  for (let i = 0; i < strNum.length; i += 1) {
    const max = Number(strNum.slice(0, i) + strNum.slice(i + 1));
    if (max > maxNum) maxNum = max;
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
