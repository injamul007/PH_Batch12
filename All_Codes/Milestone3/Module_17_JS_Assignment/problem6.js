/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var currentSalary = startingSalary;
for (var i = 0; i < experience; i++) {
  currentSalary = currentSalary * 1.05;
}
console.log(Number(currentSalary.toFixed(2)));