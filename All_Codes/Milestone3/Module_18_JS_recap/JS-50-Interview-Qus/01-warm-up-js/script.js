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


//? Ques No 7. 