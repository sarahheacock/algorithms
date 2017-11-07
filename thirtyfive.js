// shuffle an array in-place
function getRandom(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr){
  const max = arr.length - 1;

  for(let i = 0; i < arr.length; i++){
    //get a random number that is greater of equal to
    //the current placement--the previous have already been shuffled
    let j = getRandom(max, i);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);

shuffle(arr);
console.log(arr);
