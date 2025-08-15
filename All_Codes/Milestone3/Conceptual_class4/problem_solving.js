//?

// var totalRows = 20;

// for (let i = 1; i <= totalRows; i++) {
//   if(i % 3 === 0 || i % 5 === 0) {
//     console.log('Row' + i + ' - ' + 'Premium Row 🍕')
//   } else {
//     console.log('Row' + i + ' - ' + 'Normal Row')
//   }
// }


//? Problem number 3 

var person01 = {
  firstName: 'Bosses',
  lastName: 'mosses',
  employeeId: 101,
  departmentCode: 'HR',
}

var lastThreeCh = person01.lastName.slice(0,3).toLowerCase();
var result = lastThreeCh+person01.employeeId+"@"+"Ph"+".com"
console.log(result)