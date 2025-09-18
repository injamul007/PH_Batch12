//? class and object

/**
 * class --> template
 * properties
 * method(a special type of function inside a class       without the function keyword)
 * 
 * 
 */ 

class Player { //? define a class name Player
  constructor(name, age) { //? this will call when object will create form this class player
    this.name = name;
    this.age = age
    // console.log(`My name is ${this.name} and i am ${this.age} years old`);
    // console.log(num1 + num2)
  }
  great() {  //? a function that console great msg
    // console.log('hello how are you')
  }
}

const player1 = new Player('Boss', 30); //? creating a object using class method !! and calling constructor
console.log(player1)
// const player2 = new Player('BigBoss', 31)
// player1.great(); //? call the class function using the object you make from class


class CommonInfo {
  constructor(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.country = 'Bangladesh'
    console.log(`My name is ${this.name} and i am ${this.age} years old and i am a ${this.job} and i live in ${this.country} `)
  }
}

const friend1 = new CommonInfo('Injamul',30,'Developer')
const friend2 = new CommonInfo('Nehal',29,'Robi Manager')
const friend3 = new CommonInfo('Mishkat',30,'Full-Stack-Developer')