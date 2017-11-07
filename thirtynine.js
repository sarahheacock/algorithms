//with two eggs determine the highest floor an egg can be dropped without breaking
function check(){
  let num = Math.floor(Math.random() * 99) + 1; // last safe floor
  console.log(num);

  let floor = 1;
  let diff = 14;
  let egg1 = floor <= num;
  let egg2 = true;

  while(egg1){
    floor += diff;
    diff--;
    egg1 = floor <= num;
  }

  floor -= (diff - 1);
  egg2 = floor <= num;

  while(egg2){
    floor++;
    egg2 = floor <= num;
  }

  return floor - 1;
}

console.log(check());
