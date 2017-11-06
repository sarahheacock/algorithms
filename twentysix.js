//reverse a string--strings are immutable in JS
//will have to create array, reverse array in place and then join array;

function reverseString(str){
  let arr = str.split('');

  const end = Math.floor(str.length / 2);
  const max = str.length - 1;

  for(let i = 0; i < end; i++){
    let temp = arr[i];
    arr[i] = arr[max - i];
    arr[max - i] = temp;
  }

  return arr.join('');
}

let str = "Sarah";

console.log(str);
console.log(reverseString(str));
console.log(str);
