/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let averege = last;
  while (averege) {
    averege = Math.floor((first + last) / 2);
    if (value === array[averege]) {
      return averege;
    }
    if (value < array[averege]) {
      last = averege - 1;
    }
    if (value > array[averege]) {
      first = averege + 1;
    }
  }
  return averege;
}

module.exports = findIndex;
