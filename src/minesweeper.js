const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      let count = 0;
      for (let ni = Math.max(0, i - 1); ni <= Math.min(rows - 1, i + 1); ni++) {
        for (
          let nj = Math.max(0, j - 1);
          nj <= Math.min(cols - 1, j + 1);
          nj++
        ) {
          if (ni === i && nj === j) continue;
          if (matrix[ni][nj]) count++;
        }
      }

      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
