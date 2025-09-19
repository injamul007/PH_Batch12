//? reduce in js

const numbers = [2,4,2,6,3,6,32]

// let sum = 0;
// for (const num of numbers) {
//   sum+=num;
// }
// console.log(sum)

const total = numbers.reduce((acc,curr) => acc + curr, 0);

console.log(total)