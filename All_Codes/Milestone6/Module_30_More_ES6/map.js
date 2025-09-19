//? map in js

const numbers = [4,8,2,3,5];
// let doubled = [];

// numbers.map(num => doubled.push(num*2)); //? 1 way
const doubled = numbers.map(num => num*2); //? iterate exactly like for / for of loop !!

// console.log(...doubled) //? spread it .....
// console.log(doubled);

const friends = ['zaved', 'pavel', 'nobel', 'kodbel'];

// const countLength = friends.map(el => el.length);
const firstLetter = friends.map(el => el[0].toUpperCase());

// console.log(firstLetter)

const letters = numbers.map((num, index) => {
  return num * index
})

console.log(letters)