//? recap together

const students = [
  {
    id: 1,
    name: "abul",
    marks: 50,
  },
  {
    id: 2,
    name: "nabul",
    marks: 55,
  },
  {
    id: 3,
    name: "kabul",
    marks: 95,
  },
  {
    id: 4,
    name: "dabul",
    marks: 15,
  },
];


const studentsMarks = students.map(mark => mark.marks * 0.34)
const studentsMarksGreaterThan = students.filter(mark => mark.marks > 80)
const studentsMarksFirstElement = students.filter(mark => mark.marks > 80)

console.log(studentsMarksFirstElement)