function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};


// create new class MaxStack with function getMax() that returns the largest element in the Stack
// getMax() should not remove an item
function MaxStack() {
  this.stack = new Stack();
  this.max = new Stack();
}

MaxStack.prototype.push = function(item){
  const min = this.max.peek();
  if(item >= min){
    this.max.push(item);
  }
  this.stack.push(item);
}

MaxStack.prototype.pop = function(){
  const max = this.max.peek();
  const item = this.stack.pop();

  if(item === max){
    this.max.pop();
  }
}

MaxStack.prototype.getMax = function(){
  return this.max.peek();
}

let max = new MaxStack();
max.push(8);
max.push(6);
max.push(4);

max.pop();
console.log(max.getMax()); //should return 8

max.pop();
max.pop();
max.push(10);
max.push(12);
max.push(14);

max.pop();
console.log(max.getMax()); //should return 12
