//? Arrays
//? Arrays is a special type of object
//? Arrays are mutable.

// let arr = new Array(3).fill(0);

// console.log(arr)

// let arr = [1,2,3,4,5];

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]*2);
// }

// let arr = [2,4,6,8]

// console.log(arr)

// let arr = new Array("hello", 2, true)

// console.log(arr)

// let arr = [20]
// let carr = new Array(20).fill(1)

// console.log(arr)
// console.log(carr)

// let arr = [6,36,3,66,3]

// for(let i = 0; i<arr.length; i++) {
//   console.log(arr[i]*2)
// }

// for(let elem of arr) {
//   console.log(elem)
// }

// for(let elem in arr) {
//   console.log(elem, arr[elem])
// }

// arr[0] = 99

// console.log(arr[0])
// console.log(arr)

// let arr = [1,2,3,4,5,6]

// let newArr = arr.slice(0,4)
// console.log(newArr)
// console.log(arr)

// let arr = [1,2,3,"boss",6]

// arr.splice(3,1,"toss", 5,4)

// console.log(arr)

// let arr = [1,2,3,7,8,9]

// let test = arr.splice(3,2,4,5,6)
// console.log(arr)
// console.log(test)

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]
// const newArr = arr.concat(arr2,arr3)
// const newArr2 = [...arr,...arr2,...arr3]
// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// console.log(newArr)
// console.log(newArr2)

// let arr = ['mango', 'lichi', 'jackfruit']
// let test = arr.join("/")

// console.log(arr)
// console.log(test)

// let arr = ['mango', 'lichi', 'jackfruit']

// let test = arr.includes("lichi")
// console.log(arr)
// console.log(test)

// let arr = ['mango', 'lichi', 'jackfruit']

// let test = arr.toString()

// console.log(arr)
// console.log(test)

// let arr = ['rahim', 'fahim', 'mahim']

// let test = arr.indexOf('mahim')

// console.log(arr)
// console.log(test)

// let arr = ['rahim', 'fahim', 'mahim']

// const test = arr.reverse()

// console.log(arr)
// console.log(test)
// console.log(arr)

// const arr = ['mango', 'lichi', 'mango', 'boss', 'toss']
// const test = arr.find(f => f === 'boss')
// const test = arr.filter(f => f === 'mango')

// console.log(arr)
// console.log(test)

// const str = "i love programming"

// let newVal = ""
// for(let i = 0; i<str.length; i++) {
//   console.log(str[i])
//   newVal = str[i] + newVal
// }
// console.log(str)
// console.log(newVal)

// const test = str.split(" ").reverse().join(" ")

// console.log(test)

// const arr = ['spider-man',['hulk','widow',['boss',['iron-man']],'thor']]

// console.log(arr.flat(Infinity))

// const arr = [10,5,1,20]
// const arr = ['ca','g','fb','ah','ih']

// const test = arr.sort((a,b) => {
//   console.log(`a is -> ${a}, b is -> ${b}`)
//   return a-b
// })

// console.log(arr)
// console.log(test)

// const arr = [1,2,3,4,5]

// arr.map((elem,index) => {
//   arr[index] = elem *2
// })
// const forEachArr = arr.forEach(elem => console.log(elem))
// arr.forEach((elem,index) => {
//   arr[index] = elem *2
// })
// const filterArr = arr.filter(elem => elem % 2 !== 0)
// const reduceArr = arr.reduce((prevValue, currValue) => {
//   return prevValue + currValue
// })

// const n = 5

// const reduceArr = Array.from({length:n}, (_,i) => i+1).reduce((acc,curr)=>{
//   return curr * acc
// })

// const reduceArr = Array.from({length: 5},(_,i) => i+1).map(elem => elem)

// console.log(arr)
// console.log(reduceArr)
// console.log(filterArr)
// console.log(forEachArr)
// console.log(mapArr)


// const arr = [1, 2, 3, 4, 5];

// const reduceArr = arr.reduce((acc,curr) => {
//   console.log(`acc->${acc},,curr->${curr}`)
//   return acc + curr
// })

// console.log(arr)
// console.log(reduceArr)

//? 1.
// const arr = [77,88,66,84,96]
// const sum = arr.reduce((acc,curr) => acc + curr)
// const avgMarks = sum / arr.length
// console.log(avgMarks)

//? 2. 
// const newArr = new Array(20).fill(0)
// console.log(newArr)

//? 3. 
// const n = 5
// const lengthOfArr = Array.from({length: n}, (_,i) => i+1)
// const arr = new Array(n).fill(0)
// arr.forEach((_,index) => {
//   arr[index] = index + 1
// })
// console.log(arr)

//? 4.
// const heroes = ['iron-man','captain','black-widow','wanda','hulk','black-panther']

// heroes.push('spider-man')
// heroes.unshift('thor')
// heroes.splice(3,1,"hawkeye")
// console.log(heroes.indexOf('captain'))

//? 5.
// const test = 'true'
// console.log(Array.isArray(test))
// console.log(Array.from(test))

//? 6.
// const a = 2
// const b = 'hello'
// const c = {name:"boss"}
// const d = [1,2]
// console.log(Array.of(a,b,c,d))

//? 7.
// const isPalindrome = (str) => {
//   const strNum = str.toString()
//   const strLowerCase = strNum.toLowerCase()
//   const reverseStr = strLowerCase.split("").reverse().join("")
//   if(strLowerCase === reverseStr) {
//     return "it is a palindrome"
//   } else {
//     return "not a palindrome"
//   }
// }

// const result = isPalindrome(121)
// console.log(result)

//? 8.
// const str = 'i love programming'
// const mapStr = str.split(' ').map(elem => {
//   const firstLetterCap = elem[0].toUpperCase()
//   const restOfTheLetters = elem.slice(1)
//   return firstLetterCap + restOfTheLetters
// })

// console.log(str)
// console.log(mapStr.join(" "))