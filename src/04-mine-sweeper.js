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
function getNeighborsNumbers(matrix, i, j) {
  const allPossibleIndexes = [
    [i - 1, j],
    [i, j - 1],
    [i - 1, j - 1],
    [i + 1, j],
    [i, j + 1],
    [i + 1, j + 1],
    [i + 1, j - 1],
    [i - 1, j + 1],
  ];
  const allPossibleValues = [];
  allPossibleIndexes.forEach(([x, y]) => {
    if (typeof matrix[x] !== 'undefined') allPossibleValues.push(matrix[x][y]);
  });
  return allPossibleValues.filter((value) => value !== undefined && value === true).length;
}

function minesweeper(matrix) {
  const clone = matrix;
  if (clone.flat(Infinity).indexOf(true) === -1) return matrix.map((el) => el.fill(0));
  matrix.forEach((row, rowIndex) => row.forEach((_, index) => {
    if (matrix[rowIndex][index] !== true) {
      clone[rowIndex][index] = getNeighborsNumbers(matrix, rowIndex, index);
    }
  }));

  clone.forEach((row, rowIndex) => row.forEach((_, index) => {
    if (matrix[rowIndex][index] === true) {
      clone[rowIndex][index] = 1;
    }
  }));
  return clone;
}

module.exports = minesweeper;
