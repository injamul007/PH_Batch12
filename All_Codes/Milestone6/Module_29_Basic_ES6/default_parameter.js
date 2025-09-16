//? default parameters in functions in js

function sum(num1=0, num2=0) {
  const total = num1 + num2;
  console.log(num1, num2, total)
}

//? NaN --> Not a Number
// sum(10);

function multiply(num1=1, num2=1) {
  const total = num1 * num2;
  console.log(num1, num2, total)
}

// multiply()

function callName(firstName='Hello', lastName='Sir') {
  const fullName = firstName+ ' ' + lastName;
  console.log(fullName)
}

// callName('injamul', 'hoque')
// callName()

