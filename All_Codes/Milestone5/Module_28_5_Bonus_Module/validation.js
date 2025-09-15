//? isNaN

const number = '24';

if(typeof number === 'number') {
  console.log('It is a number')
} else {
  console.log('It is not a number')
}

const numbersArr = [3,12,78,90];
// console.log(typeof numbersArr);
// console.log(Array.isArray(numbersArr));
const infoObj = {
  name: 'Boss',
  job: 'Mafia',
}
// console.log(typeof infoObj);
// console.log(Array.isArray(infoObj));

// console.log(isNaN(12))
// console.log(isNaN('Hello'))
console.log(isNaN('12')) // false
console.log(isNaN([])) // false
console.log(isNaN([12])) //false
console.log(isNaN(['hello','boss'])) //true
console.log(isNaN({})) // true
console.log(isNaN({name: 'boss'})) // true