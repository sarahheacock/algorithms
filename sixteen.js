//return an object that contains the index of cakeType as key and num of cakes

function maxDuffelBagValue(types, cap){
  let result = 0;

  types.sort((a, b) => { //put max value to weight ratio first
    const aRatio = Math.floor(a.value / a.weight);
    const bRatio = Math.floor(b.value / b.weight);
    if(aRatio === bRatio){
      return a.weight - b.weight;
    }
    else {
      return bRatio - aRatio;
    }
  }).forEach((type, i) => {
    while(cap >= type.weight){
      if(result[i]) result[i] += 1;
      else result[i] = 1;

      cap -= type.weight;
      result += type.value;
    }
  });

  return result;
}

var cakeTypes = [
  {weight: 1,  value: 30},
  {weight: 50, value: 200}
];

var capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));
