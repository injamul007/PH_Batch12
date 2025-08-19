//? Problem-3 

function willSuccess(marks) {
// You have to write your code here
if (!Array.isArray(marks)) {
  return 'Invalid'
}
let passSub = 0;
let failSub = 0;
for (let mark of marks) {
  if(mark >= 50) {
    passSub++;
  } else {
    failSub++;
  }
}
if(passSub > failSub) {
  return true;
}
  return false;
}

// console.log(willSuccess([60, 70, 80, 40, 30]));
// console.log(willSuccess([48 , 48 , 92 , 100 ]));
// console.log(willSuccess([48, 48, 50, 50, 100]));
// console.log(willSuccess([]));
// console.log(willSuccess([90]));
// console.log(willSuccess([ 90 , 99 , 87 , 48 , 34 , 49 ]));
// console.log(willSuccess("100 , 100"));
console.log(willSuccess( [55 , 75 , 41 , 33 , 0 , 87 , 91 , 30 , 40, 33]));