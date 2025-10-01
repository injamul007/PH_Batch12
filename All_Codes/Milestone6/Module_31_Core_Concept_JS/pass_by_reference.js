//? Pass by reference 
//? all primitive values (number, string, boolean) always pass by value
//? all non-primitive value (object, array , function) always pass by references

//! pass by values
// const multiply = (x,y) => {
//   console.log('before value set',x,y)
//   x=x+5;
//   y=y+5;
//   console.log('after value set',x,y)
//   const mult = x * y;
//   return mult;
// }

// const a = 5;
// const b = 7;

// console.log('before function call',a,b)
// console.log(multiply(a,b))
// console.log('after function call',a,b)


//! pass by reference

const addMoney = (obj1, obj2) => {
  console.log('before adding new value',obj1.money, obj2.money)
  obj1.money = obj1.money + 2000;
  obj2.money = obj2.money + 2000;
  console.log('after adding new value',obj1.money, obj2.money)
  const sum = obj1.money + obj2.money;
  return sum;
}


const manik = {name: 'manik', money: 5000};
const roton = {name: 'roton', money: 15000}

console.log('before function call', manik.money, roton.money);
console.log(addMoney(manik, roton));
console.log('after function call', manik.money, roton.money);