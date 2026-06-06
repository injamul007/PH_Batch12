// let arr = [1,2,3]
// let newArr = [...arr,'boss',false]
// console.log(newArr)
// let copyArr = arr
// copyArr.push(5)

//? shallow copy
// let copyArr = [...arr]
// copyArr.push(6)
// console.log(arr)
// console.log(copyArr)

//? spread with string
// const str = 'injamul hoque tonmoy'
// console.log([...str])

//? spread with function call

// const arr = [2,4,6]

// function connectWithSpread(num1,num2,num3){
//   return num1 + num2 + num3
// }

// const result = connectWithSpread(...arr)
// console.log(result)

//? spread with object

// const obj = {
//   name: "boss",
//   age: 32,
//   passion: "coding",
//   city: "dhaka",
// };

// const newObj = { ...obj, name: "boss2", language: "english" };

// console.log(obj);
// console.log(newObj);


//? Rest Operator
//? Rest Operator in functions parameters

// function sum(...numbers){
//   return numbers.reduce((acc,curr)=>{
//     return acc + curr
//   },0)
// }

// const sumResult = sum(2,4,5,6,8,15,10)
// console.log(sumResult)


//? Rest operator with destructuring in array

// const arr = ['boss1','toss2','coss3','loss','poss','sos']

// const [first,second,third, ...restOfThePeople] = arr

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(restOfThePeople)


//? Rest operator with destructuring in object

// const obj = {
//   name: 'boss',
//   age: 32,
//   company: 'personal',
//   city: 'dhaka',
//   area: 'suk-ra-bad'
// }

// const {name: fullname ,age: myAge, ...restOfTheInfo} = obj

// console.log(obj)
// console.log(fullname)
// console.log(myAge)
// console.log(restOfTheInfo)