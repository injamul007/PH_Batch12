//? freeze in js

const employee = {
  name: 'Boss',
  designation: 'QC',
  salary: 20000,
  experience: 1,
}

const {salary,experience} = employee;

Object.freeze(employee) //? prevent the default keys and values and addition !!

delete employee.experience;

employee.salary = salary + 5000;
employee.location = 'Dhaka';

console.log(employee)