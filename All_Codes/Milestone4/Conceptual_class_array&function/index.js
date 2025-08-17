//?

// var --> redeclare and re-assign
// let --> re-assign
// const -->  cannot redeclare and re-assign it

//? some important array method !!

//? push --> adding an array element in last
//? pop ---> removing an array element from last
//? unshift --> adding an array element in first
//? shift --> removing an array element from first

// let students = ['korim', 'rohim','zahid', 'asif']

// let i = 0;
// while(i < students.length) {
//   console.log(students[i]);
//   i++;
// }

//? Revers an array

// let students = ['korim', 'rohim','zahid', 'asif']

// students.reverse();

// console.log(students)

//? reverse using for of loop

// let reverseArr = []
// for (const stu of students) {
//   reverseArr.unshift(stu);
// }

// for (let i = students.length-1; i >= 0; i--) {
//   reverseArr.push(students[i])
// }

// console.log(students)
// console.log(reverseArr)

//? sort method in an array

// const fruits = ['Banana', 'Apple', 'Orange', 'Grape']

// console.log(fruits);
// fruits.sort();
// console.log(fruits);

// const numbers = [40, 10, 200, 50]

// console.log(numbers)
// numbers.sort()
// console.log(numbers)

//? Which method modified the original and main array and which are not ?!

/**
 * ? Modifies the original array-- mutation
 * push
 * pop
 * shift
 * unshift
 * sort()
 * reverse()
 *
 * ? Not Modifies the original array/does copy-- non-mutation
 * concat()
 * slice()
 * map()
 * filter()
 * forEach()
 * find()
 * includes()
 * */

//? Array of Object

const persons = [
  {
    name: "rohim",
    age: 20,
    isStudent: true,
  },
  {
    name: "korim",
    age: 25,
    isStudent: false,
  },
  {
    name: "jake",
    age: 35,
    isStudent: false,
  },
];

// for (const person of persons) {
// console.log('Name:', person.name,)
// console.log(`Name: ${person.name}`);
// }

// console.log(persons[1]);
// console.log(persons[1].name);

//? for in loop

const person = {
  name: "jake",
  age: 35,
  isStudent: false,
};

// console.log(person)

// for (const key in person) {
//   // console.log(key,":", person[key])
//   console.log(`${key} : ${person[key]}`);
// }

//? What is functions ???

//?! function is a block of reusable code designed to perform a particular task. Functions allow for code organization, reusability, and modularity within a program.

//? Functions syntax

// function greeting() {
//   console.log("Hello To All");
// }

// greeting()

/**
 *? types of function
 *
 * normal function
 * es6 --> fat arrow function
 * anonymous function
 *? IIFE (Immediately Invoked Function Expression)
 * */

//? Arrow function
// const greeting = () => {
//   console.log("Hello to all")
// }

// greeting();

// function add(value1, value2) { //? these two are parameters
//   // console.log("Result :", value1 + value2);
//   const result = value1 + value2;
//   return result;
// }

// const addValue = add(20, 22); //? these two values are arguments

// console.log('Result of the sum:',addValue);

// const arr = [10,20,30,40];

// function sumFromArr(values) {
//   let result = 0;
//   for (const val of values) {
//     result += val;
//   }
//   return result;
// }

// const sumResult = sumFromArr(arr) + 250;

// console.log(sumResult);



const arr = [10,20,30,40,50];

// function findNumber(arr, num) {
//   for (const el of arr) {
//     if (el === num) {
//       return 'Number Found';
//     }
//   }
//   return 'Number Not Found';
// }

// function findNumber(arr, num) {
//   let result;
//   for (const el of arr) {
//     if (el === num) {
//       result = 'Found'
//       break;
//     } else {
//       result = 'Not Found'
//     }
//   }
//   return result;
// }

// const result = findNumber(arr, 40);
// console.log(result);

// console.log(findNumber(arr, 30));

//? IIFE --->

// (function greet() {
//   console.log("Hello Bangladesh")
// })();


//? Different types of parameters

// function greeting(name = 'Boss') {
//   console.log("Hello,", name)
// }

// // greeting('boss');
// greeting();
// greeting("Iron-Man");


// function addTwoNum(a=0, b=0) {
//   console.log(a + b)
// }

// addTwoNum(30, 30);
// addTwoNum(30);

//? Rest Parameters

// function sumAll(...numbers) {
//   // console.log(numbers)
//   let result = 0;
//   for (const num of numbers) {
//     result += num
//   }
//   // return result;
//   console.log(result)
// }

// sumAll(10,20,30,40)
// sumAll(10,20)
// sumAll(10,20,30)

//? sort an array

const numbersArr = [12,44,77,99,3,200,1,5];
function sortMethod(arr) {
  arr.sort(function(a,b) {return a-b});
  return arr
}

const result = sortMethod(numbersArr);
console.log(result)