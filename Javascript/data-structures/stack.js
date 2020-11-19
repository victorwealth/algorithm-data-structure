// STACK
// A stack is a data structure that obeys last-in first-out principle (LIFO)
// There are several methods to make this happen
// add - adds item to the end of the stack
// remove - removes last item added to the stack
// peek - to see which item is next for removal
// length - length property to return the length of the stack
// isEmpty - checks if the stack is empty

function createStack() {
  const stack = [];
  let top = 0; // keeps the length of the array. Array.prototype.length as well.
  return {
    add(item) {
      stack.push(item); // this adds to the begining. [first-item, second-item, third-item]
      top += 1;
    },
    remove(){
      if (this.isEmpty() === false){
        top = top - 1;
        return stack.pop();
      }
    },
    peek() {
      return stack[top - 1];
    },
    get length() {
      return top;
    },
    isEmpty(){
      return top === 0;
    },
    print() {
      // print in order of removal LIFO
      stack.reverse().forEach((item) => console.log(item));
    }
  }
}

const s = createStack();
 s.add('first-item');
 s.add('second-item');
 s.add('third-item');

//console.log(s.remove())
//console.log(s.peek())

s.print();
