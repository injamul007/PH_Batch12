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



