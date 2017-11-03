//write a function to see if binary tree is
//breadth-first uses a queue
function BinaryTreeNode(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function BinaryTree(){
  this.root = {};
}

BinaryTree.prototype.checkBalance = function(){
  let treeArr = [this.root.right, this.root.left];
  let done = false;

  while(!treeArr.includes(null)){
    console.log(treeArr);

    const temp = treeArr.reduce((a, b) => {
      a.push(b.right);
      a.push(b.left);
      return a;
    }, []);

    treeArr = temp;
  }

  return treeArr.reduce((a, b) => {
    if(b === null){
      return a;
    }
    else {
      return a && b.right === null && b.left === null;
    }
  }, true);
};

function create(){
  let tree = new BinaryTree();
  tree.root = new BinaryTreeNode('A');

  tree.root.left = new BinaryTreeNode('B');
  tree.root.right = new BinaryTreeNode('C');

  tree.root.left.left = new BinaryTreeNode('D');
  console.log(tree.checkBalance());

  tree.root.left.left.right = new BinaryTreeNode('E');
  console.log(tree.checkBalance());
  return "done";
}

console.log(create());
