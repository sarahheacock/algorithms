//determine if a deck of cards has been shuffled once
function shuffled(deck, half1, half2){
  let one = 0;
  let two = 0;

  deck.forEach((card) => {
    if(one < half1.length && half1[one] === card){
      one++;
    }
    else if(two < half2.length && half2[two] === card){
      two++;
    }
    else {
      return false;
    }
  });

  return true;
}


let deck = [1,2,3,4,5,6];
let half1 = [2, 3, 6];
let half2 = [1, 4, 5];
console.log(shuffled(deck, half1, half2));
