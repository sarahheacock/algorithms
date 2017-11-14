const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan']
};

function route(sender, receiver){
  let array = network[sender].map((send) => { return [sender, send]; });
  let done = [];

  while(done.length === 0){
    let temp = [];
    for(let i = 0; i < array.length; i++){
      let last = array[i][array[i].length - 1];
      if(last === receiver){
        done = array[i];
        break;
      }
      else if(network[last]){
        network[last].forEach((person) => {
          temp.push(array[i].concat([person]));
        });
      }
    }
    array = temp;
  }

  return done;
}


console.log(route('Jayden', 'Adam')); // Jayden, Amelia, Adam
