//given the position of opening '(', find the position of ')'

function parenth(str, pos){
  let open = 0;
  for(let i = pos; i < str.length; i++){
    if(str[i] === "("){
      open++;
    }
    else if(str[i] === ")"){
      open--;

      if(open === 0){
        return i;
      }
    }
  }

  return -1;
}

const str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
console.log(parenth(str, 10));
