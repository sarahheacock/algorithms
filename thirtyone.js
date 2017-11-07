// write recursive function for generating all permutations of a string
// assume every character is unique
let arr = [];

function gen(word, left){

  for(let i = 0; i < left.length; i++){
    let newLeft = left.slice(0, i) + left.slice(i+1);
    let newWord = word + left[i];

    if(newLeft.length > 0){
      gen(newWord, newLeft);
    }
    else {
      arr.push(newWord);
    }
  }

  return arr;
}

function perm(str){
  return gen('', str);
}

console.log(perm("Dogs"));
