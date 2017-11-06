function maxDuffelBagValue(types, cap){
  //create an array where each index is the capacity between 0 and capacity
  //return the max value of that array
  let arr = [...new Array(cap + 1)].map((a) => { return 0; });

  for(let i = 0; i < arr.length; i++){
    let max = 0;

    for(let j = 0; j < types.length; j++){
      //determine num of types[j] can fit into weight
      let num = Math.floor(i / types[j].weight);

      if(num > 0){
        let remainder = cap % types[j].weight;
        let total = num * types[j].value + arr[remainder];

        max = (total > max) ? total : max;
      }
    }
    arr[i] = max;
  }

  console.log(arr);
  return arr[cap];
}

var cakeTypes = [
  {weight: 3, value: 40},
  {weight: 5, value: 70}
];

var capacity = 9;

console.log(maxDuffelBagValue(cakeTypes, capacity)); //120
