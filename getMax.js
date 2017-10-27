function get_Max(arr){
  var i = 1;
  var start = arr[1] - arr[0];

  return arr.reduce(function(a, b){
    var max = (i < arr.length) ? arr.slice(i).reduce(function(c, d){
      return Math.max(c, d);
    }) : 0;
    var diff = max - b;
    i++;
    return (diff > a) ? diff : a;
  }, start);
}

console.log(get_Max([10, 7, 5, 8, 11, 9]));
console.log(get_Max([10, 7, 11, 8, 5, 9]));
