//? Function

// console.log("Today we will learning function")

function hello() {
  console.log("I am a Function")
}

// hello(); //? this is how you call a function

function moneyBag() {
  var money = 4500;
  console.log("I have", money, "Taka" );
}

// moneyBag();

function jogKorarMachine(input1, input2) {
  let sum = input1 + input2;
  // console.log("Sum is", sum);
  return sum;
}

const result = jogKorarMachine(10,22);

// console.log(result);


function biyogKorarMachine(input1, input2) {
  return sub = input1 - input2;
}

// const result2 = biyogKorarMachine(20,12);
// console.log(result2)


function gunKorarMachine(input1, input2) {
  return mul = input1 * input2;
}

const result3 = gunKorarMachine(20,12);
// console.log(result3)


function vaagKorarMachine(input1, input2) {
  return divide = input1 / input2;
}

const result4 = vaagKorarMachine(20,12);
console.log(result4)