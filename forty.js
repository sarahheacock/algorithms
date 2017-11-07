// find duplicate integers between 1 and n
// in an array that is n + 1 length

function duplicate(arr){
  //traverse with slower and faster until they match up
  let result = [];

  const count = (floor, ceiling) => {
    if(floor < ceiling){
      let mid = Math.floor((ceiling - floor) / 2) + floor;
      let lowerCount = 0;
      let upperCount = 0;

      arr.forEach((a) => {
        if(a >= floor && a <= mid){
          lowerCount++;
        }
        else if(a > mid && a <= ceiling){
          upperCount++;
        }
      });


      if(lowerCount > (mid - floor + 1)){
        count(floor, mid);
      }

      if(upperCount > (ceiling - mid)){
        count(mid + 1, ceiling);
      }
    }
    else {
      result.push(floor);
      //return result;
    }
  };

  count(1, arr.length - 1);

  return result;
}

let arr = [1, 3, 2, 4, 3, 6, 4, 5];
console.log(duplicate(arr));
