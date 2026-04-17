// console.log('cli')



//? Intermediate js qus from 16 - 25

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

const string = 'i am boss'
const arr = ['i','a','m','b','o','s','s']

// const newStr = string.slice(5)
// const newArr = arr.slice(5)
// console.log(string)
// console.log(newStr)
// console.log(newArr)

console.log(arr.splice(3,1,'t'))
console.log(arr)