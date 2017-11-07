//reverse a string message

function reverseWords(str){
  let arr = str.split(' ');
  let start = 0;
  let end = arr.length - 1;

  while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr.join(' ')
}

const message = 'find you will pain only go you recordings security the into if';

console.log(reverseWords(message));
