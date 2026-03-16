// const car = {
//   "full name": "Boss",
//   brand: "Toyota",
//   "color": "Red",
//   speed: `180kmh`,
//   start: function() {
//     return `Starting the ${this} car`
//   },
//   stop: ()=> {
//     return `Stopping the ${this.brand} car`
//   }
// };

// console.log(typeof car === "object")
// console.log(!Array.isArray(car))

// const {brand, speed: topSpeed} = car
// console.log(brand,topSpeed)

// const test = 'full name'

// console.log(car.hasOwnProperty('speed'))

// Object.freeze(car)
// car.brand = 'BMW'
// delete car.color
// car.origin = "Japan"
// console.log(car)
// Object.seal(car)
// car.new = 'new'
// delete car["full name"]
// car["full name"] = 'toss'
// console.log(car)

// console.log(car)
// const car2 = {...car}
// console.log(car2)
// const car2 = {}
// Object.assign(car2, car)
// console.log(car2)

// console.log(car.speed)
// console.log(car['color'])
// console.log(car.start())
// console.log(car.stop())
// console.log(car[test])
// console.log(this)
// const keys = Object.keys(car)
// const values = Object.values(car)
// const entries = Object.entries(car)
// console.log(keys)
// console.log(values)
// console.log(entries)

// for(let elem of entries[1]) {
//   console.log(elem)
// }

// for(let test in car) {
//   console.log(test,car[test])
// }

// const person = new Object({
//   test: "pass"
// });
// person.name = "boss"
// person.age = 32

// console.log(person)
// person.name = "toss"
// person.city = 'dhaka'
// console.log(person)
// delete person.city
// console.log(person)


//?  Q&A
//? 1.
// const person = {
//   name: "boss",
//   age: 32,
//   city: "dhaka"
// }

// person.email = "boss@gmail.com"
// delete person.city
// console.log(person)

// for(let key in person) {
//   console.log(`Property of key is ${key} and Value is ${person[key]}`)
// }

//? 2.

// const obj = {
//   firstName: "Injamul",
//   middleName: "Hoque",
//   lastName: "Tonmoy"
// }
// console.log(obj)

// const convertToFullName = (obj)=> {
//   const {firstName, middleName, lastName} = obj
//   const fullName = firstName + " "+ middleName + " " + lastName
//   return fullName
// }

// console.log(convertToFullName(obj))


//? 3.

// const obj = {
//   name: "boss",
//   age: 32,
//   city: "dhaka",
//   isMarried: false
// }
// console.log(obj)

// const numOfProperty = (obj) => {
//   const numProp = Object.keys(obj)
//   return numProp.length
// }

// console.log(numOfProperty(obj))


//? 4.

// const users = [
//   {name: "Alice", role: "admin"},
//   {name: "Bob", role: "user"},
//   {name: "Charlie", role: "admin"},
//   {name: "bill", role: "admin"}
// ]
// console.log(users)

// const roleAdmin = (arr) => {
//   // const arrOfNames = []
//   // for(let elem of arr) {
//   //   if(elem.role === "admin") {
//   //     arrOfNames.push(elem.name)
//   //   }
//   // }
//   // return arrOfNames

//   const filterArrOfNames = arr.filter(item => item.role === "admin")
//   const finalArr = filterArrOfNames.map(item => item.name)
//   return finalArr
// }

// console.log(roleAdmin(users))