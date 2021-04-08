/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push(arr[i]);
    } else {
      newArr.push('?');
    }
  }
  arr.sort((a, b) => a - b); // arr.sort(function (a, b) { return a - b; });
  const arrSorted = arr.filter((word) => word !== -1);
  let calcForSortedArr = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === '?') {
      newArr[j] = arrSorted[calcForSortedArr];
      calcForSortedArr++;
    }
  }
  return newArr;
}

module.exports = sortByHeight;
