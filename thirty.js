//take permutations of string and determine if
//any of the permutations creates a palindrome

function checkPalindrome(str){
  //str is even can only have equal number of each character
  //str is odd can only have one character that is different

  const set = str.split('').reduce((a, b) => {
    if(a.has(b)){
      a.delete(b);
    }
    else {
      a.add(b);
    }

    return a;
  }, new Set());

  const length = set.size;

  return (str.length % 2 === 0) ? length === 0 : length === 1;
}

console.log(checkPalindrome("ivicc"));
console.log(checkPalindrome("civil"));
