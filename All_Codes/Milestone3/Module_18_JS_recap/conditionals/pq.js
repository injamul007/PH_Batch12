//? PQ Part here

//? Pq1. Give choice to the user to select theme color and set the selected theme color and console it.

//?1st method to run this program

// let colorArr = ["red","green","blue"];

// let userColor = prompt('Enter Your Color');

// if (colorArr.includes(userColor)) {
//   console.log(`Your Color is ${userColor} and It Matches`);
// } else {
//   console.log(`Your Color is ${userColor} and it's not Match`);
// };

//? 2nd method to run this program

// let userColor = prompt('Enter Your Color');

// if (userColor === "red") {
//   console.log("the color is match");
// } else if (userColor === "blue") {
//   console.log("the color is match");
// } else if (userColor === "green") {
//   console.log("the color is match");
// } else {
//   console.log("your color is not match");
// };

//? Pq2. Find the smallest of three number.

// let number1 = parseInt(prompt("Enter Your Number1"));
// let number2 = parseInt(prompt("Enter Your Number2"));
// let number3 = parseInt(prompt("Enter Your Number3"));

//? 1st method of this code which is nested if else
// if (isNaN(number1)) {
//   console.log('Please give a number to check the value');
// } else if (number1 < number2) {
//   if (number1 < number3) {
//     console.log(`The number is number1 = ${number1}, if condition if`)
//   } else {
//     console.log(`The number is number3 = ${number3}, if condition else`);
//   }
// } else {
//   if (number2 < number3) {
//     console.log(`The number is number2 = ${number2}, else condition if`);
//   } else {
//     console.log(`The number is number3 = ${number3}, else condition else`);
//   }
// };

//? 2nd method of this code which is regular if else
// if (isNaN(number1)) {
//   console.log("please give a number to check the value");
// } else if (number1 < number2 && number1 < number3) {
//   console.log(`the number is number1 ${number1}`);
// } else if (number2 < number3) {
//   console.log(`the number is number2 ${number2}`);
// } else {
//   console.log(`the number is number3 ${number3}`)
// }

//? Pq3. Find the smallest of three number.

// let userRole = prompt('Enter a User Role("admin","editor","viewer"):');

// switch (userRole) {
//   case "admin":
//     console.log("Full Access");
//     break;
//   case "editor":
//     console.log("Edit Access");
//     break;
//     case "viewer":
//     console.log("Read-only");
//     break;
//   default:
//     console.log("No Access");
// }

//? Pq4. Check if number is Divisible by 3 or 5 or both.print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "Fizzbuzz" for both.

// let number = parseInt(prompt('Enter a number'));

// if (isNaN(number)) {
//   console.log("please enter a number");
// } else if (number % 3 === 0 && number % 5 === 0) {
//   console.log("FizzBuzz", number);
// } else if (number % 3 === 0) {
//   console.log("Fizz", number);
// } else if (number % 5 === 0) {
//   console.log("Buzz", number);
// } else {
//   console.log("neither divisible by 3 nor by 5 !!");
// }

//? Pq5. Create a simple calculator. Take two numbers and an operator(+,-,*,/) and calculate the result using switch.

// let num1 = Number(prompt("Enter 1st number"));
// let operator = prompt('Enter the Operator(+ ,- , *, /, % ,**):');
// let num2 = Number(prompt("Enter 2nd number"));

// switch (operator) {
//   case "+":
//     console.log(`Case '+' : ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`Case '-' : ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`Case '*' : ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`Case '/' : ${num1 / num2}`);
//     break;
//   case "%":
//     console.log(`Case '%' : ${num1 % num2}`);
//     break;
//   case "**":
//     console.log(`Case '**' : ${num1 ** num2}`);
//     break;
//   default:
//     console.log("give a valid number that can operate");
// }


//? Pq6. Create a simple ATM program. User can choose:
//? 1. Check Balance
//? 2. Deposit
//? 3. Withdraw
//? 4. Exit


// let totalBalance = 10000;

// let userChoice = Number(prompt('Enter your choice !! 1.Check balance 2.Deposit 3. Withdraw 4. Exit'));

// if (!userChoice || isNaN(userChoice)) {
//   console.log('Please Enter Valid choice number');
// } else if (userChoice === 1) {
//   console.log('your Account balance is',totalBalance);
// } else if (userChoice === 2) {
//   let deposit = Number(prompt('Enter Your Deposit Amount'));
//   if (!deposit || isNaN(deposit)) {
//     console.log(`Please Enter Valid Deposit Amount`);
//   } else if (deposit > 0) {
//     totalBalance += deposit;
//     console.log(`your deposit amount is ${deposit} and your totalAmount is ${totalBalance}`);
//   }
// } else if (userChoice === 3) {
//   let withdraw = Number(prompt('Enter Your Withdraw Amount!'));
//   if (!withdraw || isNaN(withdraw)) {
//     console.log(`Please Enter Valid Withdraw Amount`);
//   } else if (withdraw > 0 && withdraw <= totalBalance) {
//     totalBalance -= withdraw;
//     console.log(`Your withdraw amount is ${withdraw} and your remaining totalAmount is ${totalBalance}`);
//   } else {
//     console.log('your withdraw amount must be less than your totalAmount');
//   }
// } else {
//   console.log('Thank you for banking with us');
// }