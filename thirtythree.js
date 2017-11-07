//have an array that is n+1 length
//every number 1 through n appears once
//except one appears twice

function find(arr){
  const n = arr.length - 1;
  const predicted = (n + 1) * n / 2;
  const total = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  return total - predicted;
}

console.log(find([2, 3, 4, 1, 5, 6, 4]));
