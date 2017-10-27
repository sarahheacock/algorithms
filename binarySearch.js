function binarySearch(target, arr){
  var start = Math.floor(arr.length / 2);

  while(start >= 0 && start < arr.length){
    if(arr[start] === target) return true;

    if(arr[start] > target){ //go down
      start = Math.floor(start - ((start - 0) / 2));
    }
    else{ //go up
      start = Math.floor(start + ((arr.length - start) / 2));
    }
  }

  return false;
}

console.time();
console.log(binarySearch(12, [0, 4, 5, 9, 12, 15, 16]));
console.log(binarySearch(16, [0, 4, 5, 9, 12, 15, 16]));
console.log(binarySearch(0, [0, 4, 5, 9, 12, 15, 16]));
console.timeEnd();
