//? Callback is nothing but a function
//? Callback is a function passed as an argument to another function
//? higher order function (hod) is a function that takes another function in it as an argument also call itself a callback function

// function hod(name, callback){
//   callback(name)
// }


// function printName(name) {
//   console.log('hello', name)
// }


// hod('mkl', printName)


// function calculate(a,b, callback){
//   callback(a,b)
// }

// function sum(a,b){
//   console.log(a + b)
// }
// function subtract(a,b){
//   console.log(a - b)
// }
// function multiply(a,b){
//   console.log(a * b)
// }

// calculate(5,5, sum)
// calculate(5,3, subtract)
// calculate(5,5, multiply)