//create rand7 from rand5
function rand5(){
  return Math.round(Math.random() * (5 - 1)) + 1;
}

function rand7(){
  // return Math.round((rand5() - 1) * (6 / 4)) + 1;
  while (true) {

        // do our die rolls
        var roll1 = rand5();
        var roll2 = rand5();

        var outcomeNumber = (roll1-1) * 5 + (roll2-1) + 1;

        // if we hit an extraneous
        // outcome we just re-roll
        if (outcomeNumber > 21) continue;

        // our outcome was fine. return it!
        return outcomeNumber % 7 + 1;
  }
}

function check(){
  for(let i = 0; i < 10; i++){
    console.log(rand7());
  }
}

check();
