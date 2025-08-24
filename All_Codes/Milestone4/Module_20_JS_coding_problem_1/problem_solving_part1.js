//? Task-1:
//? Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(temperature) {
  let fahrenheit = temperature * (9/5) + 32;
  return fahrenheit;
}

// console.log(celsiusToFahrenheit(30));

//?Task-2:
//? You are given an array of numbers. Count how many times the a number is repeated in the array.

function countRepeat(number,search) {
  let count = 0;
  for (const num of number) {
    if (num === search) {
      count++;
    }
  }
  return count;
}

// console.log(countRepeat([5,6,11,12,98,5],5));
// console.log(countRepeat([5,6,11,12,98,5],25));

//?Task-3:
//? Write a function to count the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  let vowels = 'aeiou';
  for (const word of str) {
    if (vowels.includes(word)) {
      count++
    }
  }
  return count;
}

// console.log(countVowels('hi this is me ! the boss'))

//?Task-4:
//? Write a function to find the longest word in a given string.

function longestWord(str) {
  let words = str.split(' ');
  let newStr = words[0];
  for (const word of words) {
    if (word.length > newStr.length) {
      newStr = word;
    }
  }
  return newStr;
}

console.log(longestWord('I am learning Programming to become a programmer'));