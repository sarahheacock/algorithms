//with an array of integers, find the max product;

function findMax(arr){
  let total = arr.slice(0, 3).sort((a, b) => { return a - b; })
  total.splice(0, 0, total[0], total[1]);

  for(let i = 3; i < arr.length; i++){
    let done = false;
    let j = 4;
    while(j > 1 && !done){
      if(arr[i] >= total[j]){
        total.splice(j + 1, 0, arr[i]);
        total.splice(2, 1);
        done = true;
      }
      j--;
    }

    //done = false
    j = 0;
    while(j < 2 && !done){
      if(arr[i] <= total[j]){
        total.splice(j, 0, arr[i]);
        total.splice(2, 1);
        done = true;
      }
      j++;
    }
  }

  console.log(total);
  return Math.max(total[0] * total[1] * total[4], total[2] * total[3] * total[4]);
}

console.log(findMax([1, 5, 7, 0, -8, -6]));
