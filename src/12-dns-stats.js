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
  const savedDomains = domains;
  const obj = {};
  for (let i = 0; i < savedDomains.length; i++) {
    savedDomains[i] = savedDomains[i].split('.');
    for (let j = 0; j < savedDomains[i].length; j++) {
      let calc = j + 1;
      while (calc < savedDomains[i].length) {
        savedDomains[i][j] = savedDomains[i][calc].concat('.', savedDomains[i][j]);
        calc++;
      }
      savedDomains[i][j] = '.'.concat(savedDomains[i][j]);
      if (obj[savedDomains[i][j]] === undefined) {
        obj[savedDomains[i][j]] = 1;
      } else {
        obj[savedDomains[i][j]]++;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
