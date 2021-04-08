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
  let arrOfDig = [];
  const digTOWork = n.toString();
  for (let i = 0; i < digTOWork.length; i++) {
    arrOfDig.push(digTOWork[i]);
  }
  for (let i = 0; i < arrOfDig.length; i++) {
    if (arrOfDig[i + 1] !== '0' && (arrOfDig[i] === '0' || arrOfDig[i] === '1')) {
      arrOfDig.splice(i, 1);
      arrOfDig = arrOfDig.join('');
      break;
    }
  }
  return parseInt(arrOfDig, 10);
}
module.exports = deleteDigit;
