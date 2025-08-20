//? Array on an array

const numbers = [1,2,5,4,6];

// const tournamentRuns = [[], [], []];

const examMarks = [
  [98, 87, 45, 12, 63],
  [54, 89, 74, 23, 11],
  [45, 87, 12, 56, 45],
]

// for (const marks of examMarks) {
//   console.log(marks)
// }

// for (let i = 0; i < examMarks.length; i++) {
//   console.log(examMarks[i]);
//   for (let j = 0; j < examMarks[i].length; j++) {
//     console.log(j, examMarks[i][j])
//   }
// }

const first_class_marks_first = examMarks[0][0];
// console.log(first_class_marks_first)

// examMarks[0][1] = 99;

examMarks[1].pop()
examMarks[1].push(88);
console.log(examMarks);