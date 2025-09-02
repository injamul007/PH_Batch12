//? Problem-5

function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  };
  let sumOfMarks = 0;
  let passSub = 0;
  let failSub = 0;
  for (const mark of marks) {
    sumOfMarks += mark;
    if(mark >= 40) {
      passSub++;
    } else {
      failSub++;
    }
  };
  let finalScore = Math.round(sumOfMarks / marks.length);
  if (marks.length === 0) {
    finalScore = 0;
  };
  const object = {finalScore: finalScore, pass: passSub, fail: failSub};
  return object;
}


console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));
console.log(resultReport("100"));