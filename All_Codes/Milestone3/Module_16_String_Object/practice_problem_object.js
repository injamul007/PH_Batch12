//?
//? Task-1

const colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  'golden rod': '#daa520',
}

// console.log(colors['golden rod']);


//? Task-2

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
}

// car['passenger capacity'] = 5;
car.passengerCapacity = 5

// console.log(car);

//? Task-3

// const student = {
//   name: 'Hamim Sakep',
//   id: 5421,
//   physics: {
//     subject: 'HSC Physics',
//     author: 'Shahjahan Tapan',
//     marks: 30,
//   },
// }

// const physicsMarks = student.physics.marks;

// console.log(physicsMarks);

//? Task-4

let student = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true,
}

const keys = Object.keys(student);

let countProp = keys.length;
// console.log(countProp);
// let countProp = 0;
// for (let i = 0; i < keys.length; i++) {
//   countProp++;
// }


//? Task-5 

let myObject = {
  name: 'John Doe',
  age: 25,
  city: 'Example city',
  isStudent: true,
}

// for (const obj in myObject) {
//   console.log("Key: ",obj, "|" ,"type:" ,typeof myObject[obj])
// }