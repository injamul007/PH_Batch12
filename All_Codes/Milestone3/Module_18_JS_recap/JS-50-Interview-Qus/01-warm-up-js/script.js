//? 50 interview question of JS


//? Ques No 1. Create a function that returns the last element of an array

// function getLastElement(arr) {
//   return arr[arr.length-1]
// }

// console.log(getLastElement([2,3,4,99,22,66]))


//? Ques No 2. Combination of two array

// const arr1 = [1,2,3]
// const arr2 = [5,6,7]

// const combination = arr1.concat(arr2)
// const combination = [...arr1,...arr2]
// console.log(combination)


//? Ques No 3. Generate a random integer between 0 to 18

// const randomInteger = Math.floor(Math.random() * 19)

// console.log(randomInteger)


//? Ques No 4. Create a function that takes an array containing both numbers and strings, and return a new array containing only the string

// const arr = [1,2,3, "hello", "boss", "the", "john", 'lark', 4,5,6];

// function getOnlyString(arr) {
//   const newArr = arr.filter(elem => typeof elem === "string")
//   return newArr
// }

// console.log(getOnlyString(arr))


//? Ques No 5. find the maximum number in an array

// const arr = [22,44,9,33,2,22]

// const maximumNumber = (arr) => {
//   let currentMax = 2;
//   for(let elem of arr) {
//     if(elem > currentMax) {
//       currentMax = elem
//     }
//   }
//   return currentMax
// }

// console.log(maximumNumber(arr))



//? Ques No 6.  write a function that returns the length of a given object (number of keys)

// const obj = {
//   name: "boss",
//   age: 32,
//   address: "Dhaka",
//   company: "confidential"
// }
// let count= 0;
// for(let keys in obj) {
//   count++
// }

// console.log(count)

// const lengthOfAnObj = (obj) => {
//   return Object.keys(obj).length
// }

// console.log(lengthOfAnObj(obj))


//? Ques No 7. in an array of object filter out those object which have gender's value male

// const arrOfObj = [
//   {name: 'karla', gender: 'female'},
//   {name: "bill", gender: "male"},
//   {name: "john", gender: "male"},
//   {name: 'wanda', gender: 'female'}
// ]

// const genderMale = (arr)=> {
//   return arr.filter(elem => elem.gender === 'male')
// }

// console.log(genderMale(arrOfObj))


//? Ques No 8.  give an array of strings, return a new array where all strings are in uppercase.

// const stringArr = ['boss', 'toss']

// const upperCase = (arr) => {
//   return arr.map(elem => elem.toUpperCase())
// }

// console.log(upperCase(stringArr))


//? Ques No 9. Check if an object is empty or not


// const obj = {}

// const checkEmptyObj = (obj) => {
//   let keyArrLength = Object.keys(obj).length
//   if(keyArrLength === 0) {
//     return "Empty Obj"
//   }
//   return keyArrLength
// }

// console.log(checkEmptyObj(obj))


//? Ques No 10. Create an array of numbers and double each value using map()

// const numArr = [2,4,6,8]

// const doubleArrNum = numArr.map(elem => elem*2)

// console.log(doubleArrNum)


//? Ques No 11. Convert an array of string into a single comma-separated string

// const stringArr = ['boss', "toss", 1, 4]

// console.log(stringArr.join())


//? Ques No 12. Write a function to flatten a nested array (one level deep).e.g([1,2,3,['a','b'],4,5,6])

// const arr = [1,2,3,['a','b',['boss']],4,5,6]

// const flattenArr = (arr) => {
//   // return arr.flat(2)
//   return arr.splice(3,1, ...arr[3])
// }
// console.log(flattenArr(arr))


//? Ques No 13. write a function that checks if all elements in an array are numbers.

// const arr = [1,2,3,'boss',4]

// const checkNumbersInArr = (localArr)=> {
//   // let isNumbers = true;
//   // localArr.forEach(element => {
//   //   if(typeof element !== "number") {
//   //     isNumbers = false;
//   //   }
//   // });
//   // return isNumbers

//   let isNumbers = localArr.every(elem => typeof elem === "number")
//   return isNumbers
// }

// console.log(checkNumbersInArr(arr))


//? Ques No 14. check if a number is prime number or not


// const isPrime = (num) => {
//   if(num < 2) {
//     return 'not prime'
//   }

//   for(let i = 2; i <= Math.sqrt(num) ; i++) {
//     if(num % i === 0) {
//       return 'not prime'
//     }
//   }
//   return 'prime'
// }

// console.log(isPrime(17))



//? Ques No 15. create a function that removes duplicate values from an array

// const arr = [2,2,3,4,4,5,6]

// const removeDuplicate = (localArr) => {
  // let newArr = []
  // for(let i = 0; i < localArr.length; i++) {
  //   if(!newArr.includes(localArr[i])) {
  //     newArr.push(localArr[i])
  //   }
  // }
  // return newArr

//   const filteredDuplicate = localArr.filter((element, index) => {
//     return localArr.indexOf(element) === index
//   })
//   return filteredDuplicate
// }

// console.log(removeDuplicate(arr))
// console.log(arr.indexOf(4))