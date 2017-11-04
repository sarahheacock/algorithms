//check to make that the tree is valid
//node's value is greater than the values of the left nodes
//node's value is less than the values of the right nodes

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

BinaryTree.prototype.check = function(){
  // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({node: this.root, lowerBound: -Infinity, upperBound: Infinity});

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var node = nodeAndBounds.node,
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds.upperBound;

        // if this node is invalid, we return false right away
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        if (node.left) {
            // this node must be less than the current node
            nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});

        }
        if (node.right) {
            // this node must be greater than the current node
            nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
        }
    }

    // if none of the nodes were invalid, return true
    // (at this point we have checked all nodes)
    return true;
}

function create(){
  let tree = new BinaryTree();
  tree.root = new BinaryTreeNode(50);

  tree.root.left = new BinaryTreeNode(30);
  tree.root.right = new BinaryTreeNode(80);

  tree.root.left.left = new BinaryTreeNode(20);
  tree.root.right.left = new BinaryTreeNode(70);
  tree.root.right.right = new BinaryTreeNode(90);
  console.log(tree.check());

  tree.root.left.right = new BinaryTreeNode(60);
  console.log(tree.check());
  return "done";
}

console.log(create());
