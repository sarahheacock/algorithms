//validate openers and closers
function closers(str){
  let stack = [];
  for(let i = 0; i < str.length; i++){
    let num = str.charCodeAt(i);
    let diff = (stack.length < 1) ? 3 : num - stack[stack.length - 1];

    if(diff >= 1 && diff <= 2){
      stack.pop();
    }
    else {
      stack.push(num);
    }
  }

  return stack.length === 0;
}

console.log(closers("{[]()}")) //true
console.log(closers("{{[(])}")) //false
console.log(closers("{[}")) //false
