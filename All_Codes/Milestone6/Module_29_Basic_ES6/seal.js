//? Seal in js

const employee = {
  name: 'Boss',
  designation: 'QC',
  salary: 20000,
  experience: 1,
}

const {salary,experience} = employee;

Object.seal(employee) //? prevent the default keys and values and addition !!

delete employee.experience; //? will not delete bcz of seal property

employee.salary = salary + 5000; //? just this modification will work in seal !!
employee.location = 'Dhaka'; //? will not add bcz of seal property

console.log(employee)