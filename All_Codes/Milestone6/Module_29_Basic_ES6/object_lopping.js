//? Looping Object

const numbersArr = [82,97,38,21];

for (const num of numbersArr) {
  // console.log(num)
}

const employee = {
  name: 'Boss',
  designation: 'QC',
  salary: 20000,
  experience: 1,
}

for(const key in employee) {
  // console.log(key, employee[key])
}

// const keys = Object.keys(employee);
const allEntries = Object.entries(employee);
// console.log(keys)

for (const elem of allEntries) {
  // console.log( allEntries[2])
}


const doubleNumbers = (arr) => {
  let newArrDouble = [];
  for (const num of arr) {
    newArrDouble.push(num * 2);
  }
  return newArrDouble;
}

// console.log(doubleNumbers([2,3,4,5]));