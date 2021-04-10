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
  const arr = [];
  let calc = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== str[i - 1]) {
      arr.push(str[i]);
      if (calc !== 1) {
        arr.push(calc);
      }
      calc = 1;
    } else {
      calc++;
    }
  }
  return arr.reverse().join('');
}

module.exports = encodeLine;
