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

//? This is called callback hell

// function getData(data, callback){
//   setTimeout(()=>{
//     console.log(data);
//     if(callback){
//       callback()
//     }
//   },2000)
// }

// console.log('fetching 1st data');
// getData('1st data', ()=>{
//   console.log('fetching 2nd data')
//   getData('2nd data',()=>{
//     console.log('fetching 3rd data')
//     getData('3rd data',()=>{
//       console.log('fetching 4th data')
//       getData("4th data")
//     })
//   })
// });


//? another example of callback hell
// setTimeout(() => {
//   console.log("1st data");
//   setTimeout(() => {
//     console.log("2nd data");
//     setTimeout(() => {
//       console.log("3rd data");
//       setTimeout(() => {
//         console.log("4th data");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
