/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const separatedDomains = domains.map((el) => el.split('.').reverse());
  const hld = separatedDomains.map((el) => el[0]);
  const d = separatedDomains.flat(Infinity);
  const uniq = new Set(d);
  const uniqHLD = new Set(hld);
  const obj = {};
  uniq.forEach((value) => {
    if (uniqHLD.has(value)) {
      obj[`.${value}`] = d.filter((str) => (str === value)).length;
    }
    const domainName = separatedDomains.filter((el) => el.includes(value));
    domainName.forEach((name) => {
      const key = name.join('.');
      obj[`.${key}`] = d.filter((str) => (str === value)).length;
    });
  });

  return obj;
  // throw new Error('Not implemented');
}

module.exports = getDNSStats;
