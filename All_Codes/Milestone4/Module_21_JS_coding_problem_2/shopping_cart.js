//? shopping cart 

const products = [
  {name: 'shampoo', price: 300, quantity: 4},
  {name: 'chiruni', price: 100, quantity: 2},
  {name: 'shirt', price: 700, quantity: 4},
  {name: 'pant', price: 1200, quantity: 4},
  {name: 'jacket', price: 2200, quantity: 1},
  {name: 'shoe', price: 900, quantity: 1},
]


function sumFromArrObject(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element.price * element.quantity;
  }
  return sum;
}

console.log('Sum of all the object price :',sumFromArrObject(products))