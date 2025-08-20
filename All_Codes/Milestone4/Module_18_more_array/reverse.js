//?

const numbers = [1,2,3,4,5]

//? reverse = [5,4,3,2,1]

const reversed = [];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
//   // reversed.push(numbers[i]);
//   reversed.unshift(numbers[i]) //? this will reverse now
// }

// for (let i = numbers.length-1; i >= 0; i--) {
//   reversed.push(numbers[i])
// }

// for (const num of numbers) {
//   reversed.unshift(num);
// }

const reverseArr = numbers.reverse(); //? this will change the array direct
console.log(numbers)
// console.log(reverseArr);

// console.log(reversed)