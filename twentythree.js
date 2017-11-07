//check a Linked List to see if it contains a cycle
function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList(){
  this.head = new Node("S");
  let current = this.head
  let saved;

  const arr = ["a", "r", "a", 'h'];
  arr.forEach((a) => {
    current.next = new Node(a);
    current = current.next;
    if(a === "r"){
      saved = current;
    }
  });

  //current.next = saved;
}

LinkedList.prototype.containsCycle = function() {
  let current = this.head;
  let next = current.next;

  while(next !== null && next !== current){
    current = current.next;

    if(next.next === null){
      return false;
    }
    next = next.next.next;
  }

  return next !== null;
}

let list = new LinkedList();
console.log(list.containsCycle());
