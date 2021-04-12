/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const clone = matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  const result = clone.map((arr) => {
    if (arr.indexOf(0) === -1) return arr;
    return arr.slice(0, arr.indexOf(0));
  }).flat(Infinity);
  if (result.length === 0) return 0;
  return result.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
