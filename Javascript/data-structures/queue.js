// QUEUE
// A queue is a data structure that obeys first-in first-out principle (FIFO)
// There are several methods to make this happen
// add or enqueue - adds item to the first position of the Queue
// remove or dequeue - removes item from the list in other in which it was added
// peek - to see which item is next for removal
// length - length property to return the length of the queue
// isEmpty - checks if the queue is empty

function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item); // this adds to the begining of the array. [third-item, second-item, first-item]
    },
    dequeue(){
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty(){
      return queue.length === 0;
    },
    get getQueue() {
      return queue;
    }
  }
}

const q = createQueue();
q.enqueue('first-item');
q.enqueue('second-item');
q.enqueue('third-item');

console.log(q.getQueue);
