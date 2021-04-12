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
  if (n < 10) return n;
  const stringN = String(n).split('').sort((a, b) => Number(a) - Number(b));
  const min = Math.min(...stringN);
  const result = String(n).replace(String(min), '');
  return Number(result);
}

module.exports = deleteDigit;
