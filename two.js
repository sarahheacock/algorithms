//array of integers and each index, find the product of every integer
//except integer at index i

function product(arr){
  let result = [];

  let front = 1;
  for(let i = 0; i < arr.length; i++){
    result.push(front);
    front *= arr[i];
  }

  let back = 1;
  for(let j = arr.length - 1; j > -1; j--){
    result[j] *= back;
    back *= arr[j];
  }

  return result;
}

console.log(product([1, 7, 3, 4]));
console.log(product([1, 7, 3, 0]));
console.log(product([1, 0, 3, 0]));
