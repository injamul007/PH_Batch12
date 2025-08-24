//? swap variables in js

let a = 5;
let b = 7;

// console.log(a,b)
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b)


// let x = 5;
// let y = 7;

// console.log(x, y)
// ([x, y] = [y, x]);
// console.log(x, y)

let x = 5;
let y = 7;

console.log(x, y);
([x, y] = [y, x]); //? this is a destructing method to swap a variables value
console.log(x, y);
