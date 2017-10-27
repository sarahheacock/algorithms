// function numberToWords(num){
//   var obj = {
//     0: "Zero",
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine",
//     10: "Ten",
//     11: "Eleven",
//     12: "Twelve",
//     13: "Thirteen",
//     14: "Fourteen",
//     15: "Fifteen",
//     16: "Sixteen",
//     17: "Seventeen",
//     18: "Eightteen",
//     19: "Nineteen",
//     20: "Twenty",
//     30: "Thirty",
//     40: "Forty",
//     50: "Fifty",
//     60: "Sixty",
//     70: "Seventy",
//     80: "Eighty",
//     90: "Ninty", //I mispelled 'Ninty' since it was mispelled in the test
//     100: "Hundred",
//     1000: "Thousand",
//     1000000: "Million",
//     1000000000: "Billion",
//     1000000000000: "Trillion",
//     1000000000000000: "Quadrillion"
//   }
//
//   var keys = Object.keys(obj).sort(function(a, b){
//     //put in decreasing order
//     if(parseInt(a) > parseInt(b)) return -1;
//     else return 1;
//   });
//
//   var map = function(input){
//     return keys.reduce(function(a, b){
//       var sub = parseInt(b);
//       var count = 0;
//
//       while(input >= sub && input > 0){
//         input -= sub;
//         count++;
//       }
//
//       if(count > 0){
//         if(count === 1 && sub < 100) a = a + obj[b];
//         else a = a + map(count) + obj[b];
//       }
//
//       return a;
//     }, '');
//   };
//
//   return map(num) || obj['0'];
// }
//I mispelled obj['90'] as 'Ninty' since it was spelled as such in the test
var obj = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eightteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninty",
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion",
  1000000000000: "Trillion",
  1000000000000000: "Quadrillion"
}

var keys = Object.keys(obj).sort(function(a, b){
  if(parseInt(a) > parseInt(b)) return -1;
  else return 1;
});

function numberToWords(number){
  var obj = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eightteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninty",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion",
    1000000000000: "Trillion",
    1000000000000000: "Quadrillion"
  };

  var keys = Object.keys(obj)
  .sort(function(a, b){
    if(parseInt(a) > parseInt(b)) return -1;
    else return 1;
  });

  return keys.reduce(function(a, b){
    var sub = parseInt(b);
    var count = 0;
    while(number >= sub && number > 0){
      number -= sub;
      count++;
    }
    if(count > 0){
      if(count === 1 && sub < 100){
        a = a + obj[b];
      }
      else{
        a = a + numberToWords(count) + obj[b];
      }
    }
    return a;
  }, '') || obj['0'];
}


console.log(numberToWords(0) === 'Zero');
console.log(numberToWords(43) === 'FortyThree');
console.log(numberToWords(2999) === 'TwoThousandNineHundredNintyNine');
console.log(numberToWords(15) === 'Fifteen');
console.log(numberToWords(2483579411) === 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven');
console.log(numberToWords(300525151340440) === 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty');
console.log(numberToWords(92120000000000000), numberToWords(92120000000000000) === 'NintyTwoQuadrillionOneHundredTwentyTrillion');

// const rotate = function(){
//   const input = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
//   //let output = [];
//   const length = input.length;
//   console.log(length);
//
//   //for(let col = 0; col < length; col++){
//   return [...new Array(length)].map((x, col) => {
//     let newRow = [];
//     for(let row = length - 1; row >= 0; row--){
//       console.log(row, col);
//       newRow.push(input[row][col]);
//     }
//     return newRow;
//   });
//
//   //}
//
// };
//
// const arr = rotate();
// console.log(arr);
