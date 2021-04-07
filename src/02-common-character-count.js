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
  let calc = 0;
  function makeObj(string) {
    const obj = {};
    for (let i = 0; i < string.length; i++) {
      if (obj[string[i]] === undefined) {
        obj[string[i]] = 1;
      } else {
        obj[string[i]] += 1; // obj[string[i]] = obj[string[i]] + 1
      }
    }
    return obj;
  }
  const obj1 = makeObj(s1);
  const obj2 = makeObj(s2);
  const arrKeys1 = Object.keys(obj1);
  const arrKeys2 = Object.keys(obj2);
  for (let i = 0; i < arrKeys1.length; i++) {
    for (let j = 0; j < arrKeys2.length; j++) {
      if (arrKeys1[i] === arrKeys2[j]) {
        calc += Math.min(obj1[arrKeys1[i]], obj2[arrKeys2[j]]);
      }
    }
  }
  return calc;
}
module.exports = getCommonCharacterCount;
