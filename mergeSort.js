function mergeSort(arr){
  let result = arr.map(function(a){
    return [a];
  });

  const length = arr.length;
  console.log(result);

  while(result[0].length < length){
    let newArr = [];

    for(let i = 0; i < result.length; i += 2){
      if(result[i + 1]){
        newArr.push([]);

        let right = 0;
        let left = 0;

        while(left < result[i].length || right < result[i + 1].length){
          if(right < result[i + 1].length && (result[i + 1][right] < result[i][left] || left === result[i].length)){ //push in right
            newArr[newArr.length - 1].push(result[i + 1][right]);
            right++;
          }
          else { //push in left
            newArr[newArr.length - 1].push(result[i][left]);
            left++;
          }
        }

      }
      else {
        newArr.push(result[i]);
      }
    }
    //get rid of tail end
    result = newArr;
    console.log(result);
  }

  return result[0];
}


const random = Array.apply(null, Array(6)).map(function() {
    return Math.round(Math.random() * 50);
});

console.log(mergeSort(random));
