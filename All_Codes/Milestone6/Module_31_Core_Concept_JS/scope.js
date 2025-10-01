//? scope in js
//? Global Scope
const fullName = 'Tom Hanks';
if(true) {
  const data = 58;
  console.log('inside the if block',data, fullName)
  doMath(33,44)
}

// console.log(data) //? outside the if block !! this will give an error bcz of scope and data is defined inside of if block not defined outside !!

// while(true) {
//? this is also a block
// }

for (const num of [1,2,3,4]) {
  // console.log(num)
  //? this is also a block in loop
}

//? function scope or local scope
function doMath(a,b) {
  console.log(a,b)
  const sum = a+b;
  const total = sum + 10;
  // console.log(fullName)
}

// console.log(a,b)
// console.log(fullName)