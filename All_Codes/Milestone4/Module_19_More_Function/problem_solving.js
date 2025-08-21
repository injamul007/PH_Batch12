//?! task-1
//?Take four parameters. Multiply the four numbers and then return the result

function multiply(a,b,c,d) {
  let result = a*b*c*d;
  return result;
}

// console.log(multiply(2,2,2,2))

//?! task-2
//?Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function oddOrEven(number) {
  if (number % 2 !== 0) {
   return number * 2;
  } else {
    return number / 2;
  }
}

// console.log(oddOrEven(23));

//?! task-3
//?Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg(arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  let avg = sum / arr.length;
  return avg;
}

// console.log(makeAvg([2,3,4,5,6]));

//?! task-4
//?Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(str) {
  let count = 0;
  for (const char of str) {
    if (char === '0') {
      count++;
    }
  }
  return count;
}

// console.log(countZero('010100110'));

//?! Task-5
//?Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function oddEven(number) {
  if (number % 2 !== 0) {
    return 'Odd';
  } else {
    return 'Even';
  }
}

console.log(oddEven(21))