//? Arrow Functions topic

//? function declaration
// console.log(add(3,4));

function add(a,b) {
  return a + b;
}

//? function expression

const addition = function(a,b) {
  return a + b;
}

// console.log(addition(3,6))


//? arrow function
//? single line arrow function
const add2 = (a,b) => a+b //? single line implicit return
// console.log(add2(6,5))


//? multi line arrow function
const mult = (a,b) => { //?here you have to declare return keyword bcz of double line or added curly braces here that's why you have to explicitly return value;
   return a*b;
}

// console.log(mult(3,5));




