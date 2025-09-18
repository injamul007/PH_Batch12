//? 

const student = {
  name: 'Boss',
  marks: 90,
  1: 50,
}

// console.log(student.1) //? will give error bcz of dot notation . in this case you have to give bracket notation
// console.log(student[1]) //? this will work fine

console.log(student.family.mother["mommy-name"]);