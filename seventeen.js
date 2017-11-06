const text = 'outside';

function logIt(){ //function creates a new scope
    console.log(text);
    var text = 'inside'; //declaration is hoisted to top of scope but assignment is not
    //let and const--hoists but throws an error
    //var--hoists declaration and returns undefined
};

logIt();
//console 'undefined'
