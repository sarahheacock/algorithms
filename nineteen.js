//implement a queue with 2 stacks
//stack has implementation with 0(1) push and pop

function Queue(){
  this.inStack = [];
  this.outStack = [];
}

Queue.prototype.enqueue = function(item){
  this.inStack.push(item);
}

Queue.prototype.dequeue = function(){
  //remove an item from top of outStack
  //if outStack is empty, see if you can get items from inStack
  if(this.outStack.length > 0){
    this.outStack.pop();
  }
  else {
    while(this.inStack.length > 1){
      const temp = this.inStack.pop();
      this.outStack.push(temp);
    }
    if(this.inStack.length === 1){
      this.inStack.pop();
    }
  }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
console.log(queue);

queue.dequeue();
console.log(queue); //2 should be gone

queue.dequeue();
console.log(queue); //4 should be gone

queue.enqueue(8);
console.log(queue);

queue.dequeue();
console.log(queue); //6 should be gone
