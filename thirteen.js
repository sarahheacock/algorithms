// find the index of rotation point
function findRotation(arr){
  const compare = arr[0];
  let ceiling = arr.length;
  let floor = -1;
  let mid;

  while(floor + 1 < ceiling){
    mid = Math.floor((ceiling - floor) / 2) + floor;
    let guess = arr[mid];
    let before = arr[mid - 1];

    if(before > guess){
      return mid;
    }

    if(guess >= compare){ //move mid up
      floor = mid;
    }
    else { //move mid down
      ceiling = mid;
    }
  }

  //console.log(mid);
  return 0;
}


console.log(findRotation([
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]));

console.log(findRotation([
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
]));

console.log(findRotation([
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
]));
