//find the number of ways you can make the array add up to amount
//we can repeat arr[i] as many times as we like


function makeChange(amount, arr){
  //ways of making n cents
  let make = [...new Array(amount + 1)].map((a) => { return 0; });
  make[0] = 1;

  arr.forEach((cent) => {
    for(let i = cent; i <= amount; i++){
      make[i] += make[i - cent];
    }
  });

  return make[amount];
}
// function makeChange(amount, arr){ // n, m
//   let result = 0;
//   arr.sort((a, b) => { // make sure array is decreasing order
//     return b - a;
//   });
//
//
//   // O(n * m) time and O(n) space
//   // create an array with max number of arr[i]
//   let temp = [];
//   for(let i = 0; i < arr.length; i++){
//     let start = amount;
//     while(start >= arr[i]){
//       temp.push(arr[i]);
//       start -= arr[i];
//     }
//   }
//
//   while(temp.length > 0){
//     let i = 0;
//     let goal = amount;
//     while(i < temp.length && goal > 0){
//       if(goal >= temp[i]){
//         goal -= temp[i];
//       }
//       i++;
//     }
//     if(goal === 0){
//       result++;
//     }
//     console.log(temp, result);
//     temp.splice(0, 1);
//   }
//
//   return result;
// }

console.log(makeChange(4, [1, 2, 3]));
