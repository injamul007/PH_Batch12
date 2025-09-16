//? Entries 

const employee = {
  name: 'Boss',
  designation: 'QC',
  salary: 20000,
  experience: 1,
}

const keys = Object.keys(employee)
const values = Object.values(employee)
const allEntries = Object.entries(employee)
// console.log(keys,values,allEntries)
console.log(allEntries)
// console.log(...keys,...values)