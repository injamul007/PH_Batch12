//? Functional ques from 37 - 43

//? Ques No 37: what is a pure function, and why is it useful in UI rendering?

// same input --> same output it will give for sure
// no shared state and side effect
// predictability


//? Ques No 38: how would you use .map() to transform a list of products into a list of HTML elements?

// do it by yourself because you have done it before


//? Ques No 39: how do you use .reduce() to calculate the total price in a shopping cart?

// const arr = [500,1700,1200,300]

// const result = arr.reduce((acc,curr) => {
//   return acc + curr
// },0)

// console.log(result)

//? Ques No 40: Explain immutability and how you would update and object in a array without mutating the original

// const user = {
//   name: 'boss',
//   age: 32
// }

// function updateName(user,name) {
//   const newObj = {...user, name}
//   return newObj
// }

// console.log(user)
// console.log(updateName(user,'toss'))
// console.log(user)


//? Ques No 41: how would you compose multiple functions to transform data step by step !

// let add2 = num => num + 2;
// let multiply5 = num => num * 5;
// let subtract10 = num => num - 10;

// function composeFunc(...fns){
//   return function (val) {
//     return fns.reduceRight((acc,currFn) => {
//       return currFn(acc)
//     },val)
//   }
// }

// console.log(composeFunc(subtract10, multiply5, add2)(6))


//? Ques No 42: what is the difference between forEach and map ? and when it is wrong to use map?
// the answer you already know about it


//? Ques No 44: how to you implement your own version of map function on arrays?

// const arr = [2,4,6,8]

// const squareLogic = (val) => {
//   return val * val
// }

// const cubeLogic = (val) => {
//   return val * val * val
// }

// const diameterLogic = (val) => {
//   return val * 2
// }

// const calculate = (logicFN) => {
//   const outputArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     outputArr.push(logicFN(arr[i]))
//   }

//   return outputArr;
// }

// Array.prototype.ownMap = calculate;

// const result = arr.ownMap(squareLogic)
// console.log(result)

// console.log(calculate(arr,squareLogic))
// console.log(calculate(arr,cubeLogic))
// console.log(calculate(arr,diameterLogic))


//? Every and Some checking


// const arr = [2,3,4,'33',5,6]

// const everyCheck = arr.every(elem => typeof elem === 'number')

// console.log(everyCheck)

// const arr = [1,2,2,3,4]

// const findMethod = arr.find(elem => elem === 2)

// console.log(findMethod)