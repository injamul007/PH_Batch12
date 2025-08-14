//? String in js

const country = "Bangladesh";
// console.log(typeof country);

const division = "Newkhale";
// console.log(typeof division);

const district = `B-Baria`;
// console.log(typeof district);

const thana = new String('Demra');

// console.log(typeof thana);
// console.log(thana);

const numbers = [54, 98, 78, 21, 65];
// console.log(numbers)
numbers[1] = 11; //? you can change array bcz its mutable
// console.log(numbers)

const capital = "Dhaka";

console.log(capital);
capital[2] = "u" //? this will not change bcz of strings are immutable; this can not be change;
console.log(capital);
// console.log(capital[0]);
// console.log(capital[1]);

// console.log(capital.length);