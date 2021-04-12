const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  get size() {
    let saveFirst = this.first;
    let calc = 0;
    while (saveFirst != null) {
      calc++;
      saveFirst = saveFirst.next;
    }
    return calc;
  }

  enqueue(element) {
    this.list = new ListNode(element);
    if (this.first === null) {
      this.first = this.list;
      this.last = this.first;
    } else {
      this.last.next = this.list;
      this.last = this.list;
    }
  }

  dequeue() {
    const saveFirst = this.first.value;
    this.first = this.first.next;
    return saveFirst;
  }
}

module.exports = Queue;
