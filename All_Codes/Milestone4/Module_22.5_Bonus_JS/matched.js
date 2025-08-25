//?

// const numbers = [45,65,23,98,19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number)
// }

// for (const number of numbers) {
//   console.log(number);
// }



const products = [
  {id: 1, name: 'Xiaomi Phone One Night', price: 22000},
  {id: 2, name: 'Iphone', price: 122000},
  {id: 3, name: 'Mac book air Laptop 2025', price: 222000},
  {id: 4, name: 'Lenovo Yoga Laptop 2025', price: 80000},
  {id: 5, name: 'Dell Laptop 2025', price: 72000},
  {id: 6, name: 'Samsung Phone Note 10', price: 92000},
  {id: 7, name: 'Nokia old phone', price: 4000},
  {id: 8, name: 'Blackberry Phone 2010', price: 42000},
]



//? Search products by its price 

function searchProduct(arr, search) {
  let matchedArr = [];
  for (const el of arr) {
    if ((el.name.toLowerCase()).includes(search.toLowerCase())) {
      matchedArr.push(el)
    }
  }
  return matchedArr;
  // return 'In This price our shop has no product';

  //? new version
  // let newArr = arr.filter((el) => {
  //   return (el.name.toLowerCase()).includes(search);
  // });

  // return newArr.length > 0 ? newArr : 'No product Found';
}

console.log(searchProduct(products, 'laptop'));

// for (const product of products) {
//   console.log(product)
// }