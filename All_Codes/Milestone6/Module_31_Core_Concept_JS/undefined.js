//? Undefined --- > Not Defined

let money; //? declare a variable but not giving the value will give you undefined
// console.log(money)

function total(a,b) {
  // console.log('value of parameters',a,b)
  if(a === undefined || b === undefined) {
    return; //? you will get undefined here also because you just return the keyword not any value/result !!
  }
  const sum = a+b
  console.log('total is ', sum)
  // return sum //? if you are not returning anything/value/result then you also get undefined
}

// total(2); //? if you give parameters in functions but not give the arguments when functions calling then it will give you undefined as well
// console.log(total(2,3))

const phone = {brand: 'samsu', price: 12500}
console.log(phone.color) //? you will get undefined form here bcz this property is not exits in the main object

const banks = ['sonali', 'rupali', 'jomuna']

console.log(banks[4]) //? you will get undefined form here bcz this index of property is not exits in the main array


delete banks[1]; 
console.log(banks[1]) //? undefined bcz you already delete this items or element

//? type of undefined is also a undefined