// take an array of movie lengths and the total length of the flight
// return a boolean if there are two different movies that are exact length of flight
// optimize runtime over memory

function find(arr, time){
  let obj = {};

  for(let i = 0; i < arr.length; i++){
    let test = time - arr[i];
    if(obj[test]){
      return true;
    }
    else {
      obj[arr[i]] = true;
    }
  }

  return Math.min('', 10);
  return false;
}

console.log(find([90, 90, 120, 30, 200], 150));
console.log(find([90, 90, 120, 30, 200], 180));
console.log(find([90, 90, 120, 30, 200], 90));
