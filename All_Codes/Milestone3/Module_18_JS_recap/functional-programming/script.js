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

// const name = 'Injamul Hoque Tonmoy'

// function createUserName(str) {
//   console.log(str.toLowerCase().replaceAll(" ", "")+ "@" + str.length)
// }

// console.log(createUserName(name))



//? reuse and compose login -> functional programming

// const toLower = str => str.toLowerCase()
// const removeSpace = str => str.replaceAll(" ", "")
// const addAtTheRate = str => "@"+ str
// const addStrLength = str => str + str.length

// function createUserName(str) {
//   return addStrLength(addAtTheRate(removeSpace(toLower(str))))
// }

// console.log(toLower(name))
// console.log(removeSpace(name))
// console.log(addAtTheRate(name))
// console.log(addStrLength(name))

// console.log(createUserName(name))


//? Don't Iterate method

// const arr = [1,2,3,4,5,6]
// const even = []

//? Iterate Method
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     even.push(arr[i])
//   }
// }

//? Don't Iterate method
// const even = arr.filter(e => e % 2 === 0)

// console.log(even)



//? Loose Coupling
//? in functional programming we focused more on loose coupling


// const endPoint = 'https://dummyjson.com/'

// function getUser(endpoint) {
//   return fetch(`${endpoint}/users`).then(res=>res.json().then(data => console.log(data.users)))
// }

// function getProduct(endpoint) {
//   return fetch(`${endpoint}/products`).then(res=>res.json().then(data => console.log(data.products)))
// }

// function getPosts(endpoint) {
//   return getFetchData(endpoint, 'posts')
// }

// function getFetchData(endpoint, route) {
//   return fetch(`${endpoint}/${route}`).then(res=> res.json()).then(data => data)
// }

// const userResult = getFetchData(endPoint, 'posts').then(data => console.log(data.posts))
// console.log(userResult)


// function sendEmail(user) {
//   console.log('Email send to :', user.email)
// }

// function sendSMS(user) {
//   console.log('SMS send to :', user.phone)
// }

// sendEmail(user)
// sendSMS(user)


// function sendMessage(value, msg) {
//   console.log('since you are authorized')
//   console.log(`${msg} send to : ${value}`)
// }

// sendMessage(user1.email, "Email")
// sendMessage(user1.phone, "SMS")

// const user1 = {
//   name: 'boss',
//   email: 'boss123@gmail.com',
//   phone: '01813826007'
// }

// const user2 = {
//   name: 'toss',
//   email: 'toss123@gmail.com',
//   phone: '01813826007'
// }


// function sendEmail(user) {
//   console.log('Email sent to :', user.email)
// }

// function sendSMS(user) {
//   console.log('SMS sent to :', user.phone)
// }

// function sendMessage(user,notifyFN) {
//   console.log('Since you are Authorized')
//   notifyFN(user)
// }


// sendMessage(user1,sendEmail)
// sendMessage(user2,sendEmail)