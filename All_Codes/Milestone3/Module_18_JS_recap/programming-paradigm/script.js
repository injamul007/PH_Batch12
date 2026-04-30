//? Programming Paradigm

//? imperative programming vs declarative programming


//? 1. Imperative paradigm
    //?  Procedural programming
    // like example : check a number is positive or negative

    //? this is unnecessary things and this make time complexity
    // function checkNumber(num) {
    //   if(num === 0) numIsZero()
    //   else if (num >= 1) numIsPositive()
    //   else numIsNegative()
    // }

    // function numIsZero() {
    //   console.log('this num is zero')
    //   functionIsEnd()
    // }

    // function numIsPositive() {
    //   console.log('this num is positive')
    //   functionIsEnd()
    // }

    // function numIsNegative() {
    //   console.log('this num is negative')
    //   functionIsEnd()
    // }

    // function functionIsEnd() {
    //   console.log('this function is end')
    // }

    // checkNumber(10)

    //? this is more accurate and this don't make time complexity
    // function checkNumber(num) {
    //   if(num === 0) {
    //     logResult('this num is zero')
    //   } else if (num > 0) {
    //     logResult('this num is positive')
    //   } else {
    //     logResult('this num is negative')
    //   }
    // }

    // function logResult(message) {
    //   console.log(message)
    //   console.log('function is end')
    // }

    // checkNumber(2)

    //?  Structured programming
    // like example: check a number positive or negative
    // function checkNumber(num) {
    //   if(num === 0) {
    //     logResult('this num is zero')
    //   } else if (num > 0) {
    //     logResult('this num is positive')
    //   } else {
    //     logResult('this num is negative')
    //   }
    // }

    // function logResult(message) {
    //   console.log(message)
    //   console.log('function is end')
    // }

    // checkNumber(2)

//? 2. Declarative paradigm
    //  Functional Programming
    //  Reactive Programming

//? Object-Oriented Programming
    //?  Class-based
    // class Car{
    //   constructor(name,age){
    //     this.name = name
    //     this.age = age
    //   }
    //   start(){
    //     console.log('starting the car')
    //   }
    // }
    
    // const bmw = new Car('BMW', 80)
    // console.log(bmw)
    // console.log(bmw.start())

    //?  Prototype-based

//? Event-Driven Programming
    //  Based on event listeners, callbacks, DOM events, etc,

//? Asynchronous Programming (cross-paradigm)
    //  Callback-based
    //  Promise-based
    //  Async/Await (syntactic sugar over promise)