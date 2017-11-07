//each breakfast delivery has unique ID (positive int)
//when one of 100 drones taks off--delivery ID is added to array 'deliveryIdConfirmations'
//when drone comes back ID is added to same array again

//find last unique id in array of duplicate ids
function findUnique(arr){
  // const record = arr.reduce((set, a) => {
  //   if(set.has(a)){
  //     set.delete(a);
  //   }
  //   else{
  //     set.add(a);
  //   }
  //
  //   return set;
  // }, new Set());
  //
  // const array = Array.from(record);
  // return array[array.length - 1];
  var uniqueDeliveryId = 0;

  arr.forEach(function(deliveryId) {
      uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}

console.log(findUnique([10, 22, 22, 12, 10])); //should return 12
