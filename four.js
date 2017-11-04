// merge ranges such as
// [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]
// meetings are not necessarily in order

function merge(arr){
  //place in order of start time
  arr.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  return arr.reduce((a, b) => {
    if(a.length > 0){
      if(a[a.length - 1]['endTime'] >= b.startTime){
        a[a.length - 1]['endTime'] = Math.max(a[a.length - 1]['endTime'], b.endTime);
      }
      else {
        a.push(b);
      }
    }
    else {
      a.push(b);
    }
    return a;
  }, []);
}

console.log(merge([
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]));

console.log(merge([
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]));
