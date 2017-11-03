//array of integers where...
//integers in range 1 through n
//array has array n + 1

//at least one integer appears more than once
//only need to find duplicate once
//optimize for space

function findDuplicate(arr){ //
  //let result = [];

  const find = (floor, ceiling, result) => {
    let next;

    while(ceiling > floor){
      let mid = floor + Math.floor((ceiling - floor) / 2);
      let upper = 0;
      let lower = 0;

      arr.forEach((a) => {
        if(a >= floor && a <= mid){
          lower++;
        }
        else if(a > mid && a <= ceiling){
          upper++;
        }
      });

      if(lower > (mid - floor + 1)){ //more numbers in lower half
        if(upper > (ceiling - mid)){
          next = mid + 1;
        }
        ceiling = mid;
      }
      else { //more numbers in upper half
        floor = mid + 1;
      }
    }

    result.push(floor);

    if(next){
      return find(next, arr.length - 1, result);
    }
    else{
      return result;
    }
  }

  //divide what we are looking for in half
  return find(1, arr.length - 1, []);
}



function findDuplicateSpace(arr){
  //find a node in circle
  let start = arr[arr.length - 1];
  arr.forEach((a) => {
    start = arr[start - 1];
  });

  //find length of circle
  let length = 1;
  let end = arr[start - 1];

  while(end !== start){
    end = arr[end - 1];
    length++;
  }

  //start over length steps ahead
  start = arr[arr.length - 1];
  end = arr[start - 1];
  for(let i = 0; i < length - 1; i++){
    end = arr[end - 1];
  }

  //found beginning of circle
  while(start !== end){
    start = arr[start - 1];
    end = arr[end - 1];
  }

  return end;
}

//console.log(findDuplicate([1, 2, 5, 3, 2, 2, 1]));
console.log(findDuplicateSpace([3, 4, 2, 3, 1, 5]));
console.log(findDuplicateSpace([4, 3, 1, 1, 4]));
