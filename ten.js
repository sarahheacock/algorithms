//check to find the value that is second largest

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
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

BinaryTree.prototype.find = function(){
  //start at the root and find the largest num
  let tree = this.root;
  let value = [this.root.value];

  while(tree.right !== null){
    tree = tree.right;
    value.push(tree.value);
  }

  value.splice(-1, 1);

  while(tree.left !== null){
    tree = tree.left;
    value.push(tree.value);
  }

  return Math.max(...value);
}

function create(){
  let tree = new BinaryTree();
  tree.root = new BinaryTreeNode(50);

  tree.root.left = new BinaryTreeNode(30);
  tree.root.right = new BinaryTreeNode(80);

  tree.root.left.left = new BinaryTreeNode(20);
  tree.root.right.left = new BinaryTreeNode(70);
  tree.root.right.right = new BinaryTreeNode(90);
  return tree.find();
}

console.log(create());
