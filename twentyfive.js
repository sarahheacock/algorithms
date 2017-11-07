function kthToLastNode(num, node){
  let current = node;
  let next = node.next;

  //jump ahead
  for(let i = 0; i < num - 1; i++){
    next = next.next;
  }

  //traverse together
  while(next !== null){
    current = current.next;
    next = next.next;
  }

  return current.value;
}

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
// returns the node with value "Devil's Food" (the 2nd to last node)
