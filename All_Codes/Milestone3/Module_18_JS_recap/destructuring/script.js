// const person = {
//   name: 'boss',
//   age: 32,
//   isMarried: false,
//   address: {
//     pinCode: 1205,
//     area: 'pan-tha-path'
//   }
// }

//? destructuring method
// const {name,age,isMarried, address: {area}} = person

// console.log(name)
// console.log(age)
// console.log(isMarried)
// console.log(area)

//? array destructuring
// const [a,b,c,d,e=44] = [1,2,3,4]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

//? skip array items destructuring

// const [,,,,e] = [1,2,3,4,5]

// console.log(e)

//? array value swapping
// let a = 5;
// let b = 10;
// console.log(a);
// console.log(b);

// [a, b] = [b, a]; //? this is the best way to swapping two numbers

// console.log(a);
// console.log(b);


// const [,b,,,[x,y,[z]]] = [1,2,3,4,[5,6,[7]]]
// const [x,y] = e

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(x)
// console.log(y)
// console.log(z)


// const {name,age=32} = {name: 'boss', age: 44}

// console.log(name)
// console.log(age)

// const obj = {
//   address: {
//     arr: [1,2]
//   }
// }

// const {address: {arr: [x,y]}} = obj

// console.log(x)
// console.log(y)



//? Destructuring in Functional Parameters
//? array Destructuring in functional parameters

// let arr = [5,10]

// function sum([a,b]){
//   return a+b
// }

// const result = sum(...arr)
// const result = sum(arr)
// console.log(result)


//? Object Destructuring in functional parameters

// const obj = {
//   name: "boss",
//   age: 32
// }

// function greet({name,age}){
//   console.log(`Hello My Name is ${name} and My Age is ${age}`)
// }

// console.log(greet(obj))