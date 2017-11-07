//use rand7 to create rand5
function rand7(){
  return Math.floor(Math.random() * (7 - 1)) + 1;
}

function rand5(){
  let roll = rand7();
  return roll <= 5 ? roll : rand5();
}

// function rand5(){
//   return Math.floor((rand7() - 1) * (4 / 6)) + 1;
// }

console.log(rand5());
