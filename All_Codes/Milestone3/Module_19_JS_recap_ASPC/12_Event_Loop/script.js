// // console.log('event loop');

// var username = "Tom"

// let tom  = ()=> {
//   var username = 'Hi Tom'
//   console.log(this.username + " runs");
// }

// function tom() {
// 	// var username = "Hi Tom"
// 	console.log(this.username + " runs")
// }

// tom()


// console.log('inside global execution context');

// var a = 5;

// function testMe(){
//   console.log('inside testMe execution context');
//   var b = 10;
//   var user = {
//     name: 'boss',
//     country: 'bd'
//   }
//   function testAgain(){
//     console.log('inside testAgain execution context');
//     console.log('Exiting testAgain execution context');
//   }
  
//   testAgain()
//   console.log('Exiting testMe execution context');
// }

// testMe();

// console.log('Exiting global execution context');


// const message = 'i can do it'

// function sum(a,b){
//   const result = a + b
//   return result;
// }

// function mul(a,b) {
//   const result = a * b
//   return result;
// }

// function cal(a,b) {
//   return sum(a,b) + mul(a,b)
// }

// function getResult(a,b){
//   return cal(a,b)
// }

// getResult(5,7)

//? global execution context , hoisting , and scope 