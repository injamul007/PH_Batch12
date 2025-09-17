//? More Arrow function

const getTax = (amount, taxRate) => amount*taxRate/100;

// console.log(getTax(200,10));

//? single parameter arrow function

const getSquare = x => x*x;

// console.log(getSquare(4))

const getHalf = num => num/2;

// console.log(getHalf(100))

const firstElement = nums => nums[0];

// console.log(firstElement([23,78,75,47,99,24]))

const lastElement = arr => arr[arr.length-1];

// console.log(lastElement([23,78,75,47,99,24,90]))


//? anonymous function with single parameter arrow function

document.getElementById('').addEventListener('click', e => {
  //? so this is anonymous arrow function and we are inside of it !! this function does not have a name !!
});