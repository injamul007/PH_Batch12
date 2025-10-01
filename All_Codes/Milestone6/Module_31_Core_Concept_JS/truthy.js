//? Truthy and Falsy Values in JS

let data; //? data is undefined so falsy
data = 0 //? 0 is falsy
data = -0 //? -0 Negative '0' is falsy
data = ''; //? empty string is falsy
data = ' '; //? truthy bcz of has a white space inside of it
data = '0'; //? 0 is falsy but 0 inside of string is truthy bcz of 0 take a space in string so that's why
data = false //? falsy
data = true //? truthy
data = null //? falsy
data = {} //? Truthy
data = [] //? Truthy
//? NaN is falsy value

if(data) {
  console.log('value of data is truthy')
} else {
  console.log(data, 'is falsy')
}

//? if i need to capture the falsy value to go inside if block
//? Use Logical Not
if(!data) { //? ! sign is a logical not is means is value is truthy it will become falsy and if the value is falsy it will become truthy(One word ,this reverse the value)
  console.log('inside if with a falsy value')
} else {
  console.log(data, 'is falsy')
}

//? capture all the positive value
//? double not !!
//? Capture any value to boolean
if(!!data === true) {
  console.log('only true inside the double not')
}