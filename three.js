//with an array of integers, find the max product;

function findMax(arr){
  let total = new Array(5);

  arr.forEach((a) => {
    if(a < 0){
      total.splice(1, 0, a);
    }
    else{
      
    }
  });

  console.log(total);
  const optionOne = total[0] * total[1] * total[4];
  const optionTwo = total[2] * total[3] * total[4];

  //console.log(optionOne);
  return (optionOne > optionTwo) ? optionOne : optionTwo;
}

console.log(findMax([-1, 1, -5, 7, 0]));
