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

// const obj = {name: 'boss',age:32}

// function replaceName(name){
//   const newObj = {...obj, name} // copy the original object
//   // newObj.name = name
//   // obj.name = name;
//   return newObj
// }

// console.log(obj)
// console.log(replaceName('toss'))


// const list = ['red','black','yellow']

// function addItem(item) {
//   const newList = [...list]
//   newList.push(item)
//   return newList
// }

// console.log(list)
// // addItem('green')
// // addItem('blue')
// // addItem('brown')
// console.log(list)
// // console.log()
// const result = addItem('green')
// const result2 = addItem('blue')
// console.log(result)
// console.log(result2)


// const arr = ['alu', 'gobi', 'mule']

// function removeLastItem(lArr) {
//   // let newArr = [...lArr]
//   // newArr.pop()
//   // return newArr
//   return lArr.slice(lArr.length-1)
// }

// console.log('original arr---',arr)
// console.log('duplicate arr---',removeLastItem(arr))


//? Avoid shared state ❌


//? with shared state code
// let total = 0

// function addAmount(amount) {
//   return total+=amount
// }

// console.log(addAmount(300))


//? now without it ✅

// function addNum(a,b) {
//   return a+b
// }

// console.log(addNum(10,4))


//? Avoid side effect ❌

