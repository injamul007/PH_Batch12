//? THIS in JS

class Vehicle {
  constructor(name, type, brand, price) {
    this.name = name
    this.type = type
    this.brand = brand
    this.price = price
  }
  getPrice() {
    return this.price
  }
}

const car1 = new Vehicle('BMW','Car','BMW Motors',20000000)

// console.log(car1)
// const carPrice = car1.getPrice()
// console.log(carPrice)
// console.log(car1.getPrice())

const player = {
  name: 'Rahul Dravid',
  score: 10000,
  getScore: function() {
    // console.log(`This is ${this.name} and his Score is ${this.score}`)
    console.log(this)
  },
  getScoreArrow: () => {
    console.log(this)
  }
}

// player.getScore();
// player.getScoreArrow()
// console.log(player)

function showThis() {
  // console.log(this)
  function child() {
    // console.log(this)
  }
  child();
}

// showThis()
// child()

//! Encapsulation in js !!
//! Hiding some data/information in object or class !!
