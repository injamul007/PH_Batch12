//?

let price = 25;
let com_price = price;


price = 12;
com_price = 15;

// console.log(price);
// console.log(com_price);

const products = [24, 25, 26];

// const com_products = products;
const com_products = [];

for (const product of products) {
  com_products.push(product);
}

com_products[1] = 55;
// com_products[0] = 15;
// products[1] = 66;

// console.log(products)
// console.log(com_products)


const numbers = [1,2,3,4];

// const new_numbers = Array.from(numbers); //?Creating a new array from this method

// const new_numbers = [].concat(numbers); //? this is also a new method to create a new array

const new_numbers = [...numbers]; //? Creating array from another method !

console.log(numbers);

new_numbers[1] = 22;
// new_numbers.push(8);

console.log(new_numbers);


