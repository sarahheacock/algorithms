function myFunction(arg) {
    // must buy before you sell
    let min = arg[0];
    let result = arg[1] - arg[0];

    for(let i = 2; i < arg.length - 1; i++){
        result = Math.max(result, arg[i] - min);
        min = Math.min(min, arg[i]);
    }
    return result;
}


var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
console.log(myFunction(stockPricesYesterday));
