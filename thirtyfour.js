// create a map where keys are words and values are number
// of times the word appears
function modify(str){
  return str.toLowerCase().split('').filter((s) => {
    return s >= 'a' && s <= 'z';
  }).join('');
}

function create(str){
  return str.split(' ').reduce((map, key) => {
    let k = modify(key);

    if(map.has(k)){
      map.set(k, map.get(k) + 1)
    }
    else {
      map.set(k, 1);
    }
    return map;
  }, new Map());
}

console.log(create("Add milk and eggs, then add flour and sugar."));
