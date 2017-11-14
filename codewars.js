function calculateSpecial(lastDigit, base)
{
  let one = [lastDigit];
  const two = lastDigit;

  let num = one[0]*two;
  let product = [num%base];
  let carry = Math.floor(num/base);

  while(product[0] !== two){
     one.splice(0, 0, product[0]);

     num = one[0]*two + carry;
     product.splice(0, 0, num%base);
     carry = Math.floor(num/base)
  }

  console.log(product.join(''));
  return one.join('');
}

console.log(calculateSpecial(6, 8));
