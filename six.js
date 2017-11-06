// create a new rectangle that is formed from the intersection of two rectangles
// input and output is in the form below
// var myRectangle = {
//
//     // coordinates of bottom-left corner
//     leftX: 1,
//     bottomY: 5,
//
//     // width and height
//     width: 10,
//     height: 4,
//
// };
function mid(minOne, maxOne, minTwo, maxTwo){
  let edge = null;
  let diff = null;

  if(minOne >= minTwo && minOne < maxTwo){
    edge = minOne;
  }
  else if(minTwo >= minOne && minTwo < maxOne){
    edge = minTwo;
  }

  if(edge){
    diff = (maxOne < maxTwo) ? maxOne - edge : maxTwo - edge;
  }


  return {
    edge: edge,
    diff: diff
  };
}


function findRectangle(rectOne, rectTwo){
  // find midPoint
  bottomY = mid(rectOne.bottomY,
  rectOne.bottomY + rectOne.height,
  rectTwo.bottomY,
  rectTwo.bottomY + rectTwo.height);

  leftX = mid(rectOne.leftX,
  rectOne.leftX + rectOne.width,
  rectTwo.leftX,
  rectTwo.leftX + rectTwo.width);

  return (leftX.edge !== null && bottomY.edge !== null) ? {
    leftX: leftX.edge,
    bottomY: bottomY.edge,
    width: leftX.diff,
    height: bottomY.diff
  }:
  {
    leftX: null,
    bottomY: null,
    width: null,
    height: null
  };
}

console.log(findRectangle({
  leftX: 0,
  bottomY: 0,
  width: 5,
  height: 5
}, {
  leftX: 5,
  bottomY: 2,
  width: 1,
  height: 1
}))
