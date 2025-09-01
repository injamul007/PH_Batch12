//? 

const products = [
  {name: 'shampoo', price: 300},
  {name: 'chiruni', price: 100},
  {name: 'shirt', price: 700},
  {name: 'pant', price: 1200},
  {name: 'jacket', price: 2200},
  {name: 'shoe', price: 900},
]

function sumFromArrObject(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element.price;
  }
  return sum;
}

console.log('Sum of all the object price :',sumFromArrObject(products))