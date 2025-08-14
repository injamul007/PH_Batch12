//?

const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  isMarried: true,
  'fav-place': ['bandarban', 'saintmartin', 'kuakata'],
}

person["fav-place"].push("vatara");
person.salary = 30000;
// console.log(person);

// const keyName = 'profession';
// console.log(person[keyName])

const propName = 'profession';
person[propName] = 'DevOps';
console.log(person)