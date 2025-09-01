//? Validation is most important

function multiply(num1 , num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Please Provide a number';
  }
  const multiply = num1 * num2;
  return multiply;
}

// console.log(multiply(5,'seven'));

function fullName(firstName, lastName) {
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    return 'Please provide a string';
  }
  const result = firstName + ' ' +lastName;
  return result;
}

// console.log(fullName('Injamul'));


function getPrice(product) {
  if (typeof product !== 'object' || product === null || Array.isArray(product)) {
    return 'please provide an object'
  } else if (!('price' in product)|| product.price == null) {
    return 'please provide an object property'
  }
  const price = product.price;
  return price;
}

console.log(getPrice({name: 'mobile', price: 30000}))
console.log(getPrice(['mobile', 30000]));
console.log(getPrice({ name: 'mobile' }));
console.log(getPrice({ name: 'mobile', price: null }));


function getSecondIndex(numbers) {
  if (!Array.isArray(numbers)) {
    return 'please provide an array'
  }
  const result = numbers[1];
  return result;
}

// console.log(getSecondIndex([3,5,7]))
// console.log(getSecondIndex(3,5,7))