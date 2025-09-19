//? Practice Task
//? task-1
const users = [
  {id: 1, name: 'Alice', age: 22},
  {id: 2, name: 'Bob', age: 17},
  {id: 3, name: 'Charlie', age: 25},
]

const arrNames = users.map(name => name.name)

// console.log(arrNames)


//? task-2

const products = [
  {id: 1, name: 'Laptop', price: 1200},
  {id: 2, name: 'Phone', price: 800},
  {id: 3, name: 'pen', price: 2},
]

const priceLessThan100 = products.filter(price => price.price < 100)

// console.log(priceLessThan100)

//? task-3

const students = [
  {id: 1, name: 'David', grade: 'A'},
  {id: 2, name: 'Eve', grade: 'C'},
  {id: 3, name: 'Frank1', grade: 'B'},
  {id: 4, name: 'Frank2', grade: 'B'},
]

const firstStudentGrade = students.find(grade => grade.grade === 'B')

// console.log(firstStudentGrade)