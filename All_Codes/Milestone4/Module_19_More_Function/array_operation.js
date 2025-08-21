//?

/**
 * Objective: Write a function to give me the sum of all numbers in an array.
 * Step-1: Declare a function
 * Step-2: call check whether the function is called properly.
 * Step-3: set a parameter(s)
 * Step-4: pass the parameter(s), check whether parameter is passed in a proper format.
 * Step-5: do the functions tasks (Step by Step)
 */


function sumOfAllNumbersInArr(numbers) {
  let sum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

// const sum = sumOfAllNumbersInArr([54, 62, 12, 6]);
// console.log("Sum of all numbers in an array is: ", sum);

