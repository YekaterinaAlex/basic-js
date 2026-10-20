const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array");
  }
  const result = [];
  let discardNext = false;
  let doubleNext = false;

  for (const item of arr) {
    switch (item) {
      case "--discard-prev":
        result.pop();
        break;
      case "--double-prev":
        if (result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;
      case "--discard-next":
        discardNext = true;
        break;
      case "--double-next":
        doubleNext = true;
        break;
      default:
        if (discardNext) {
          discardNext = false;
        } else {
          result.push(item);

          if (doubleNext) {
            result.push(item);
            doubleNext = false;
          }
        }
    }
  }
  return result;
}

module.exports = {
  transform,
};
