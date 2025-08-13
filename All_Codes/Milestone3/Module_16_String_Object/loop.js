//?

const mobile = {
  brand: 'samsung',
  price: 25000,
  color: 'black',
  camera: '12mp',
  isNew: true,
}

//? for of: array
//? for in: object

// for (const prop in mobile) {
//   console.log(prop);
//   console.log(mobile[prop])
// }


const keys = Object.keys(mobile); //? Convert this object into array

// console.log(keys);

for (const key of keys) { //? for of loop bcz of array
  console.log(key,':', mobile[key]);
}

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i])
// }