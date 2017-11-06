//we have an array of n integers in ascending order
//how quickly could we check for an integer

function find(arr, target){
  //have to have outer edges less than or greater so mid can get between
  let floor = -1;
  let ceiling = arr.length;

  while(floor + 1 < ceiling){ //until we can no longer get a mid point
    let mid = Math.floor((ceiling - floor) / 2) + floor;
    let guess = arr[mid];

    if(guess === target){
      return true;
    }
    else if(guess > target){ //move mid down
      ceiling = mid;
    }
    else { //move mid up
      floor = mid;
    }
  }

  return false;
}


console.log(find([2, 3, 4, 5, 6, 6, 9, 12, 25], 12));
console.log(find([2, 3, 4, 5, 6, 6, 9, 12, 25], 25));
console.log(find([2, 3, 4, 5, 6, 6, 9, 12, 25], 2));
console.log(find([2, 3, 4, 5, 6, 6, 9, 12, 25], 7));
