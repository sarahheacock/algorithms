
// var start = a.map(function(key){ return [key]; });

//functional
var merg = function(arr){


};

var mergSort = function(arr){
  var count = 1;
  var arrOne = arr.map(function(a) { return a; });
  var arrTwo = [];
  var one = false;

  //iterate through each group size until group size is original length
  while(count < arr.length){

    // var half = count;
    // var end = (half * 2 < arr.length) ? half * 2 : arr.length;
    // var ilimit = count;
    // var jlimit = (count * 2 < arr.length) ? count * 2 : arr.length;

    var i = 0;
    var j = count;

    var ilimit = i + count;
    var jlimit = (j + count < arr.length - 1) ? j + count : arr.length;

    //iterate through each group of group size

    while(arrOne.length < arr.length || arrTwo.length < arr.length){
      // console.log(ilimit, jlimit);
      // while((i < ilimit || j < jlimit) && i <= j){
      while(arrOne.length < jlimit || arrTwo.length < jlimit){

        if(one){
          if(j === jlimit){
            arrOne.push(arrTwo[i]);
            i++;
          }
          else if(i === ilimit){
            arrOne.push(arrTwo[j]);
            j++;
          }
          else if(arrTwo[i] <= arrTwo[j]){
            arrOne.push(arrTwo[i]);
            i++;
          }
          else if(arrTwo[i] > arrTwo[j]){
            arrOne.push(arrTwo[j]);
            j++;
          }
        }
        else{
          if(j === jlimit){
            arrTwo.push(arrOne[i]);
            i++;
          }
          else if(i === ilimit){
            arrTwo.push(arrOne[j]);
            j++;
          }
          else if(arrOne[i] <= arrOne[j]){
            arrTwo.push(arrOne[i]);
            i++;
          }
          else if(arrOne[i] > arrOne[j]){
            arrTwo.push(arrOne[j]);
            j++;
          }
        }
        if(i > arr.length) i = arr.length;
        if(j > arr.length) j = arr.length;
        // console.log(i, j, arrOne, arrTwo);
      }


      // i = (i + count < arr.length - 1) ? i + count : arr.length - 1;
      // j = (j + count < arr.length - 1) ? j + count : arr.length - 1;

      ilimit = j + count;
      jlimit = (j + (2 * count) < arr.length) ? j + (2 * count) : arr.length;

      i = j;
      j = (ilimit > i) ? ilimit : arr.length;
    }

    if(count !== arr.length - 1){
      if(one){//if result was loaded into arrOne, prepare arrTwo to receive result
        one = false;
        arrTwo = [];
      }
      else{//if result was loaded into arrTwo, prepare arrOne to receive result
        one = true;
        arrOne = [];
      }
    }

    count++;
  }


  if(one) return arrOne;
  return arrTwo;

};

var randomArray = function(length, max){
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
};

var random = randomArray(50, 1000);

console.log(random);

console.time('merge');
console.log(mergSort(random));
console.timeEnd('merge');

console.time('sort');
console.log(random.sort(function(a, b){
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
}));
console.timeEnd('sort');
//object oriented
