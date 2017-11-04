// take integer n and return the nth fibonacci #
// this is NOT the best way, just a way to experiment with closures
function create(){
  let a = 0;
  let b = 1;
  // let total = n - 1;
  return function(){
    let temp = b;
    b += a;
    a = temp;
    return b;
  }
}

function fib(num){
  let result = create();
  let total = num - 2;
  let sum;

  while(total >= 0){
    sum = result();
    total--;
  }

  return sum;
}

console.log(fib(4));
