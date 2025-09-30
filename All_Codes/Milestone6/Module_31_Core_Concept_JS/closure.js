//? closure in js

// function outerFunction() {
//   let count = 0 ;
//   function innerFunction() {
//     console.log('im inside of inner function, someone called me')
//   }
//   return innerFunction;
// }

// console.log(outerFunction())


function outerFunction() {
  let count = 10;
  return function innerFunction(user) {
    count = count + 1;
    console.log('im inside of inner function',user, count);
  }
}

// console.log(outerFunction()())
const rahimCounter = outerFunction();
// console.log(rahimCounter())
rahimCounter('rahim')
rahimCounter('rahim')
rahimCounter('rahim')
console.log('--------------------------------')
const karimCounter = outerFunction();
karimCounter('karim')
karimCounter('karim')
rahimCounter('rahim')
console.log('-----------')
const porimCounter = outerFunction();
porimCounter('porim')
porimCounter('porim')
karimCounter('karim')
// const rahimCounter = rahimCounter()
// console.log(rahimCounter)