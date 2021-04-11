/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const savedFirstNum = n;
  let sum = 0;
  function calcDig(num) {
    const string = num.toString();
    for (let i = 0; i < string.length; i++) {
      sum += parseInt(string[i], 10);
    }
    if (sum > 9) {
      const rez = sum;
      sum = 0;
      calcDig(rez);
    } else {
      return sum;
    }
    return sum;
  }
  calcDig(savedFirstNum);
  return sum;
}

module.exports = getSumOfDigits;
