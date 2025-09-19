//? Inheritance in JS

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    this.food = food
    console.log(`${this.name} is eating ${this.food}`)
  }
}

class Dog extends Animal{ //? inheritance Property from Animal class !!
  constructor(name, breed) {
    super(name)
    this.breed = breed
    console.log(`Dog name is ${this.name} and his breed is ${this.breed}`)
  }

  bark() {
    console.log(`${this.name} is barking...`)
  }
}

const dog1 = new Dog('German Shepherd','German')
// const dog2 = new Dog('Husky','Russian')
// const dog3 = new Dog('Labrador','Europe')

dog1.eat('Cake')
dog1.bark()
// dog2.eat()
// dog2.bark()
// dog3.eat()
// dog3.bark()

// console.log(dog1 instanceof Dog) //? checking that dog1 object is made from Dog class or not !!


class Cat extends Animal { //? inheritance Property from Animal class !!
  constructor(name, color) {
    super(name)
    this.color = color
    console.log(`My name is ${this.name} and i am a ${this.color} cat`)
  }

  meow(sound) {
    this.sound = sound
    console.log(`${this.name} is calling ${this.sound}`)
  }
}

// const myCat = new Cat('Baby Mushi', 'white')
const cat1 = new Cat('Peu', 'black')

// myCat.eat('Murgir koliza')
// myCat.meow('Meow Meow');
cat1.eat('cat food')
cat1.meow('pip pip')