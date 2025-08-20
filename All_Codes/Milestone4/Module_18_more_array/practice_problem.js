//? Practice Problem in Array

//? task 1

// const colors = ["red", "blue", "green", "yellow", "orange"]
// const new_colors = [];

// for (const color of colors) {
//   new_colors.unshift(color);
// }

// console.log(new_colors);


//? task 2

// const numbers = [12,98,5,41,23,78,46]
// const even_numbers = [];

// for (const num of numbers) {
//   if(num % 2 === 0) {
//     even_numbers.push(num);
//   }
// }

// console.log(even_numbers);

//? Task 3

// var numbers = ["Tom", "Tim", "Tin", "Tik"];

// var newStr = '';

// for (const num of numbers) {
//   newStr +=  num;
// }

// console.log(newStr);

//? Task 4

const statement = "I am a hard working person";

let newString = statement.split(' ').reverse().join(' ');

// console.log(newString);


//? Task 5

// const numArr = [1,2,3];

// // const newNumArr = [...numArr];
// // const newNumArr = [].concat(numArr)
// const newNumArr = Array.from(numArr);


// newNumArr[0] = 99;
// console.log(numArr)
// console.log(newNumArr)

//? Task 6 

// const studentArrObj = [
//   {name: "John", marks: 85},
//   {name: "Alice", marks: 90},
// ]

// for (student of studentArrObj) {
//   const newArrObj = student;
//   console.log(newArrObj.name + ": Scores " + newArrObj.marks)
// }

//? Task 7

// const newArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]

// newArr[1][0] = 99;

// console.log(newArr);

//? Task 8 

function isPalindrome(a) {
  let str = a.toString();
  let reverse = str.split('').reverse().join('');
  return reverse === str;
}


console.log(isPalindrome(121));
