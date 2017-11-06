//crawler needs check to see if a web site has already been visited
//reduce the amount of space visited takes up
function Tree(){
  this.root = {};
}

Tree.prototype.insert = function(site){
  let obj = this.root;
  let arr = `${site}*`.replace("www.", "").replace("http://", "").replace("https://", "").split('');
  //console.log(arr);
  let visited = true;

  arr.forEach((letter) => {
    if(!obj.hasOwnProperty(letter)){
      obj[letter] = {};
      visited = false
    }
    obj = obj[letter];
  });

  return visited;
}

let tree = new Tree();
console.log(tree.insert("https://www.sarahwebdeveloper.com"));
console.log(tree.insert("https://www.sarahwebdeveloper.com"));
