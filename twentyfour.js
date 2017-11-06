function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList(str){
  this.head = new Node(str.charAt(0));

  let current = this.head;
  for(let i = 1; i < str.length; i++){
    if(current.next === null){
      current.next = new Node(str.charAt(i));
    }
    current = current.next;
  }
}

LinkedList.prototype.reverse = function(){
  let prev = null;
  let current = this.head;
  let next = null;

  while(!!current){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
  return this.head;
}

let linked = new LinkedList("Sarah");
console.log(linked.reverse());
console.log(linked);
