//? Functional Programming

//? imperative programming

// const arr = [1,2,3,4,5]
// const double = []

// for(let i = 0; i < arr.length; i++) {
//   double.push(arr[i] * 2)
// }

// console.log(arr)
// console.log(double)


//? Declarative programming

// const arr = [1,2,3,4,5]

// const doubleArr = arr.map((elem) => elem * 2)

// console.log(arr)
// console.log(doubleArr)


//? PURE Functions
//  A functions that return the same output from the same input and also it doesn't cause side effect or shared state


//? Immutability

const obj = {name: 'boss',age:32}

function replaceName(name){
  const newObj = {...obj, name} // copy the original object
  // newObj.name = name
  console.log(newObj)
  // obj.name = name;
}

console.log(obj)
replaceName('toss')