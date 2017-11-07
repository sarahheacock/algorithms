// delete a node from a linked list with only the variable pointing to that node
function deleteNode(node){
  let next = node.next.next;
  //let value = node.value;
  node.next = next;
  //node.value = value
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(a);
deleteNode(a);
console.log(a);
