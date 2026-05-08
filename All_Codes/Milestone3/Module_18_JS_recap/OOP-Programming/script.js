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