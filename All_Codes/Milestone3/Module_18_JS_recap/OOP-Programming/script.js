//? OOP Programming

// const obj = {
//   name: "boss",
//   age: 32,
//   passion: "coder",
//   introduceMySelf: function(){
//     console.log(this)
//     console.log(`this is my name -> ${this.name}`)
//     console.log(`this is my age -> ${this.age}`)
//     console.log(`this is my passion -> ${this.passion}`)
//   }
// }

// console.log(obj)
// console.log(obj.introduceMySelf())

//? Factory Function

// function Student(name,age,passion) {
//   return {
//     name: name,
//     age: age,
//     passion: passion,
//     introduceMySelf: function () {
//       console.log(this);
//       console.log(`this is my name -> ${this.name}`);
//       console.log(`this is my age -> ${this.age}`);
//       console.log(`this is my passion -> ${this.passion}`);
//     },
//   };
// }

// const result1 = Student('boss',32,'coding');
// const result2 = Student('mira',30,'cooking');
// console.log(result1);
// console.log(result2);

//? Constructor Function

// function Student(name,age,passion) {
//   this.name = name
//   this.age = age
//   this.passion = passion
//   return this
// }

// const result = new Student('boss',32,'coding')
// console.log(result)

// const arr = new Array
// console.log(typeof arr)
// console.log(typeof Array)

//? Class Constructor

// class Car{
//   constructor(brand,speed){
//     this.brand = brand
//     this.speed = speed
//   }
//   start(){
//     return 'this car is starting'
//   }
//   stop(){
//     return 'this car is stop'
//   }
// }

// const BMW = new Car('BMW','200mph')
// const Mercedes = new Car('Mercedes','220mph')
// console.log(BMW)
// console.log(Mercedes)

//? "this" Keyword

//? "new" Keyword

//? Prototype
//? Constructor Function

// function Student(name,age) {
//   this.name = name
//   this.age = age
//   // this.greet = function(){
//   //   return `Hello Everyone My Name is ${this.name}`
//   // }
//   return this
// }

// Student.prototype.greet = function(){
//   console.log(`My name is ${this.name}, age is ${this.age}`)
// }

// console.log(Student.prototype)

// const s1 = new Student('boss',32)
// const s2 = new Student('toss',22)
// console.log(s1)
// console.log(s2)
// console.log(s1.greet())
// console.log(s2.greet())

//? trying it another time

// function BankAccount(holdersName, balance = 0) {
//   this.holdersName = holdersName;
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (balance) {
//   return (this.balance += balance);
// };

// BankAccount.prototype.withdraw = function (balance) {
//   return (this.balance -= balance);
// };

// const bossAccount = new BankAccount("boss", 1000);
// const manasAccount = new BankAccount("manas", 2000);
// const tinaAccount = new BankAccount("tina", 4000);
// console.log(bossAccount)
// console.log(bossAccount.deposit(300));
// console.log(manasAccount.withdraw(200));
// console.log(manasAccount);
// console.log(tinaAccount);



//? Now the actual OOP Programming (by Class / Blueprint)

// class Car {
//   constructor(name,color,speed,mileage){
//     this.name = name
//     this.color = color
//     this.speed = speed
//     this.mileage = mileage
//   }
//   start(){
//     return `${this.name} is starting`
//   }
//   stop(){
//     return `${this.name} is stopping`
//   }
// }

// const BMW = new Car('BMW','black','180mph','20ltr')
// const Buggati = new Car('Buggati','Blue','220mph','5ltr')
// const Toyota = new Car('toyota','grey','130mph','28ltr')
// console.log(BMW)
// console.log(BMW.start())
// console.log(Buggati)
// console.log(Buggati.start())
// console.log(Toyota)
// console.log(Toyota.start())
// console.log(BMW.start())
// console.log(BMW.stop())


//? Four Pillars of OOP:

//? Abstraction
//? encapsulation
//? these two are using together

// class Car{
//   #fuel = 100

//   #burnFuel(){
//     this.#fuel -= 1
//   }

//   start(){
//     this.#burnFuel()
//     console.log('this car is starting')
//   }
// }

// const bmw = new Car()

// console.log(bmw)
// console.log(bmw.start())
// console.log(bmw)
// console.log(bmw.#burnFuel())
// console.log(bmw.#fuel)


// class BankAccount{
//   #balance = 100
//   constructor(holdersName, balance=100){
//     this.holdersName = holdersName
//     this.#balance = balance
//   }
//   deposit(balance){
//     this.#balance += balance
//   }

//   set Balance(balance){
//     if(isNaN(balance)) {
//       console.error('Invalid Balance')
//       return
//     }
//     console.log('Balance set successfully')
//     this.#balance = balance
//   }

//   get Balance(){
//     return this.#balance
//   }
// }

// const bossAccount = new BankAccount('boss',500)
// bossAccount.balance = '3232'
// console.log(bossAccount.#balance)
// bossAccount.Balance = 4444
// console.log(bossAccount.Balance)
// console.log(bossAccount)


//? inheritance

  // class Car{
  //   constructor(brand,color){
  //     this.brand = brand
  //     this.color = color
  //   }
  //   start(){
  //     console.log(`${this.brand} is starting`)
  //   }
  //   stop(){
  //     console.log(`${this.brand} is stopping`)
  //   }
  // }
  
  // class ElectricCar extends Car{
  //   constructor(brand,color,battery){
  //     super(brand,color)
  //     this.battery = `${battery}%`
  //   }
  //   charging(){
  //     console.log(`${this.brand} is charging`)
  //   }
  // }

  // const tesla = new ElectricCar('tesla','blue',70)
  // console.log(tesla)
  // console.log(tesla.start())
  // console.log(tesla.stop())
  // console.log(tesla.charging())


//? polymorphism

//? poly means many
//? morph mean 