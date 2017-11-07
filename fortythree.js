function mergeArrays(arr1, arr2){
  let result = [];
  let one = 0;
  let two = 0;

  while(arr1.length > one || arr2.length > two){
    if(arr1[one] < arr2[two]){
      result.push(arr1[one]);
      one++;
    }
    else {
      result.push(arr2[two]);
      two++;
    }
  }

  return result;
}


var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
