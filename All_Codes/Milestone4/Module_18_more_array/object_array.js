//? array - object

const numbers = [1,2,43,54,4]
const players = [{}, {}, {}]
const employees = [
  {name: "Ashik", designation: "content writer", salary: 25000},
  {name: "Atik", designation: "Developer", salary: 29000},
  {name: "Abdur Rahim", designation: "Digital Marketer", salary: 21000},
  {name: "Asifa", designation: "Web Dev", salary: 29000}
];

// console.log(employee);

const firstPersonSalary = employees[0].salary = 22000;
const firstPerson = employees[0];
// console.log(firstPerson);

// console.log(employee[1].salary);
// console.log(employees[3].designation);

// for (const employee of employees) {
//   console.log(employee.designation,employee.salary);
// }

for (const emp of employees) {
  const person = emp;
  const personInfo = person.name+ ": " + person.salary;
  console.log(personInfo);
}

