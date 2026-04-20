// console.log('cli')



//? Intermediate js qus from 16 - 30

// ? Ques no 16. what's the difference between parseInt and Number()?

// console.log( parseInt('123.3453px'))
// console.log( Number('123.3453px'))


//? Ques no 17. why does 0.1 + 0.2 !== 0.3 in javascript?

// console.log(0.1+0.2)
// console.log(0.1+0.2 === 0.3)
// const result = Math.round((0.1 + 0.2) * 100) / 100;
// console.log(result === 0.3); // 0.3


//? Ques no 18. Explain floating-point precision issues in javascript !

// JavaScript decimal number exact ভাবে store করে না — approximation করে

// 🚀 শেষ কথা
// JS number = floating point
// সব decimal exact না
// কখনো direct compare কোরো না
// use করো:
// tolerance
// rounding
// বা integer logic


//? Ques no 19. how would you handle high-precision decimal math in js ?

// console.log((0.1 + 0.2).toFixed(1))
// const sum = Number((0.1 + 0.2).toFixed(1))
// console.log(sum === 0.3)


//? Ques no 20. what is the difference between slice and splice?

// const string = 'i am boss'
// const arr = ['i','a','m','b','o','s','s']

// const newStr = string.slice(5)
// const newArr = arr.slice(5)
// console.log(string)
// console.log(newStr)
// console.log(newArr)

// console.log(arr.splice(3,1,'t'))
// console.log(arr)


//? Ques no 21. Create a function that reverse each word of a given sentences .E.G: i am boss -> ssob ma i

// const reverseWords = (str) => {
//   return str.split('').reverse().join('')
// }

// console.log(reverseWords('mai hun boss'))


//? Ques no 22. in an array of numbers and strings, only add those numbers which are not strings.

// const arr = [1,'55',3,'boss',7,1,8,false,true]

// const onlyAddNumbersFromArr = (localArr) => {
//   let sum = 0;

//   localArr.forEach(item => {
//     if(typeof item === "number") {
//       sum += item
//     }
//   })

//   return sum
// }

// console.log(onlyAddNumbersFromArr(arr))


//? Ques no 23. How would you check if a number is an integer?

// const num = 123.123

// console.log(Number.isInteger(num))
// console.log(num % 1 === 0)



//? Ques no 24. write a js function that reverse a number

// const num = 12345

// const reverseNumber = (localNum) => {
//   console.log(localNum)
//   const str = localNum.toString()
//   const reverseStr = str.split('').reverse().join('')
//   return Number(reverseStr)
// }

// console.log(reverseNumber(num))


//? Ques no 25. write a function that returns a passed string with letters in alphabetical order.

// const letter = 'i love programming'

// const sortAlphabeticalOrder = (ltr) => {
//   return ltr.replaceAll(' ', "").split("").sort().join('')
// }

// console.log(sortAlphabeticalOrder(letter))


//? Ques no 26. write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// const string = 'hey i am the boss'

// const capitalizeFirstLetter = (str) => {
//   return str.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(' ')
// }

// console.log(capitalizeFirstLetter(string))


//? Ques no 27. write a js function to get the first element of an array. Passing a parameter "n" will return the first "n" elements of the array

// const arr = ['apple','mango','lichi','banana']

// const getFirstElementOfArr = (localArr, n) => {
//   if(!n) {
//     return localArr[0]
//   }else if(n > localArr.length-1) {
//     return "invalid arr with length"
//   } else {
//     return localArr.slice(0, n)
//   }
// }

// console.log(getFirstElementOfArr(arr, 3))


//? Ques no 28. write a js function to get the number of occurrences of each letter in specified string

const string = 'i love programming'

const getOccurrenceOfEachWord = (str) => {
  let obj = {}
  str.replaceAll(' ',"").split('').forEach(letter => {
    if(obj.hasOwnProperty(letter)) {
      obj[letter] ++
    } else {
      obj[letter] = 1
    }
  })
  
  // return Object.entries(obj).map(entryArr => {
  //   return `${entryArr[0]} is appears ${entryArr[1]} times`
  // })
  return obj
}

console.log(getOccurrenceOfEachWord(string))