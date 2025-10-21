const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];
  const commands = [
    '--double-next',
    '--discard-prev',
    '--discard-next',
    '--double-prev',
  ];
  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    if (commands.includes(current)) {
      if (current === '--double-next' && i + 1 < arr.length) {
        result.push(arr[i + 1]);
      } else if (
        current === '--discard-prev' &&
        i - 1 >= 0 &&
        arr[i - 2] !== '--discard-next'
      ) {
        result.pop();
      } else if (current === '--discard-next' && i + 1 < arr.length) {
        i++;
      } else if (
        current === '--double-prev' &&
        i - 1 >= 0 &&
        arr[i - 2] !== '--discard-next'
      ) {
        result.push(arr[i - 1]);
      }
    } else result.push(current);
  }
  return result;
}
module.exports = {
  transform,
};
