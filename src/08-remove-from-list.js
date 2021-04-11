/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let elem = l;
  if (elem.value === k) {
    elem = elem.next;
  }
  const output = elem;
  while (elem.next != null) {
    if (elem.next.value !== k) {
      elem = elem.next;
    } else {
      elem.next = elem.next.next;
    }
  }
  return output;
}

module.exports = removeKFromList;
