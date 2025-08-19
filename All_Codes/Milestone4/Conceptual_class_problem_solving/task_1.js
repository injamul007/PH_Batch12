//? Task-1

function sum(input1, input2) {
  const addResult = input1 + input2;
  return addResult;
}

function multiply(input1, input2) {
  const multiplyResult = input1 * input2;
  return multiplyResult;
}

let a = 2;
let b = 3;

let result = sum(a,b) + multiply(a,b);
console.log(result);


// function sumOfAddAndMultiply(a, b) {
//   const sumResultOfAll = sum(a,b) + multiply(a,b);
//   return sumResultOfAll;
// }

// console.log(sumOfAddAndMultiply(2,3));
// console.log(sumOfAddAndMultiply(4,5));