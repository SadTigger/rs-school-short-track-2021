/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  arr.forEach((el) => {
    const len = arr.filter((string) => string === el).length;
    const regexp = new RegExp(el.repeat(len));
    if (len === 1) {
      result.push(el);
    } else if (!regexp.test(str)) {
      result.push(el);
    } else if (result.indexOf(`${len}${el}`) === -1) {
      result.push(`${len}${el}`);
    }
  });
  return result.flat(Infinity).join('');
}

module.exports = encodeLine;
