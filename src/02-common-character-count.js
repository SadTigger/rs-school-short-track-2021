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
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  const unique1 = [...new Set(arr1)];
  const unique2 = [...new Set(arr2)];
  const union = [...new Set([...arr1, ...arr2])];
  const obj1 = {};
  const obj2 = {};
  unique1.forEach((value) => { obj1[value] = arr1.filter((str) => (str === value)).length; });
  unique2.forEach((value) => { obj2[value] = arr2.filter((str) => (str === value)).length; });
  let res = 0;
  union.forEach((el) => {
    const differ = Math.max(obj1[el], obj2[el]) - Math.min(obj1[el], obj2[el]);
    if (!Number.isNaN(differ)) {
      res += Math.max(obj1[el], obj2[el]) - differ;
    }
  });
  return res;
}

module.exports = getCommonCharacterCount;
