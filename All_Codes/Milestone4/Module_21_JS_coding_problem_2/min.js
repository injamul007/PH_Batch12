//? minimum numbers find in an array

const prices = [20000, 16000, 50000, 100000, 12000, 2000]

function getMin(numbers) {
  // let minimumPrice = numbers[0];
  // for (const num of numbers) {
  //   if (num < minimumPrice) {
  //     minimumPrice = num;
  //   }
  // }
  let minimumPrice = Math.min(...numbers);
  return minimumPrice;
}

console.log(getMin(prices));