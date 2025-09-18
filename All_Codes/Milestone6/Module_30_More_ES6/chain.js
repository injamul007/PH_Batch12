//? optional chaining in js object

const student = {
  name: 'Boss',
  marks: 90,
  1: 50,
  family: {
    title: 'Hoque',
    mother: {
      'mommy-name': 'Shahina Akther',
      age: 50,
    }
  },
}

console.log(student.family.mother?.["mommy-name"])