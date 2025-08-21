//?


function returnEvenNumbers(numbers) {
  let evens = []
  for (num of numbers) {
    // console.log(num)
    if (num % 2 === 0) {
      // return true
      // console.log(num)
      evens.push(num);
    }
  }
  // console.log(evens)
  return evens;
}

// const evenNumbers = returnEvenNumbers([12,11,45,98,44,9,6]);
// console.log("All the even numbers of an array: ", evenNumbers);


function sumOfEvenNumbers (numbers) {
  let sumOfEven = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sumOfEven += num;
    }
  }
  return sumOfEven;
}

const sumOfEven = sumOfEvenNumbers([12,45,66,97])
// console.log("Sum of even Numbers :",sumOfEven);