
// var start = a.map(function(key){ return [key]; });

//functional
var merg = function(arr){


};

var mergSort = function(arr){

  var result = [];
  var i = 0;
  var half = Math.floor(arr.length / 2)
  var j = half;


  while(i < half && j < arr.length){
    console.log(i, j, arr[i], arr[j]);
    if(arr[i] <= arr[j]){
      result.push(arr[i]);
      i++;
    }
    else{
      result.push(arr[j]);
      j++;
    }
  }

  while(i < half && j >= arr.length){
    console.log(i, j, result);
    result.push(arr[i]);
    i++;
  }

  while(i >= half && j < arr.length){
    console.log(i, j, result);
    result.push(arr[j]);
    j++;
  }

  return result;

};

console.log(mergSort([34, 203, 3, 746, 200, 984, 198, 764, 9]));
//object oriented
