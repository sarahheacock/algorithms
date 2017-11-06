//create a function that sorts the scores faster than mergeSort
//given the maximum score

function sortScores(scores, max){
  let arr = new Array(max + 1);
  for(let i = 0; i < scores.length; i++){
    let score = max - scores[i];

    if(!arr[score]){
      let newArr = [];
      newArr.push(scores[i]);
      arr[score] = newArr;
    }
    else{
      arr[score].push(scores[i]);
    }
  }
  //console.log(arr);

  return arr.reduce((a, b) => {
    if(b.length > 0){
      a = a.concat(b);
    }
    return a;
  }, []);
}

var unsortedScores = [37, 89, 41, 65, 91, 53, 65];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]
