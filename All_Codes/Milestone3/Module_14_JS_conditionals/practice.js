//?! Practice task 1

// let burger = 600;

// if (burger > 500) {
//   console.log("You get free coke");
// } else {
//   console.log("You will have to buy coke for 30 tk");
// }


//?! Practice task 2
//? BMI Calculator

// let heightInMeter = 1.65;
// let weightInKg = 55;

// const bmi = (weightInKg / (heightInMeter*heightInMeter));

// console.log("Your BMI :", Number(bmi.toFixed(2)));

// if (bmi < 18.5) {
//   console.log("You are Underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9 ) {
//   console.log("You are Normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log('You are Overweight');
// } else {
//   console.log('You are too much Fatty');
// }


//?! Practice task 3
//? Grade Calculator

// const myGrade = 82;

// if (myGrade >= 90 && myGrade <= 100) {
//   console.log("You got 'A' Grade");
// } else if (myGrade >= 80 && myGrade <= 89) {
//   console.log("You got 'B' Grade");
// } else if (myGrade >= 70 && myGrade <= 79) {
//   console.log("You got 'C' Grade");
// } else if (myGrade >= 60 && myGrade <= 69) {
//   console.log("You got 'D' Grade");
// } else if (myGrade >= 0 && myGrade <= 59) {
//   console.log("You got 'F' Grade and You Fail");
// }


//?! Practice task 4
//? Nested Friend

// const myMarks = 74;
// const friendMarks = 84;

// if (myMarks > 80) {
//   if (friendMarks > 80) {
//     console.log("Let's go for a lunch bro");
//   } else if (friendMarks >= 60 && friendMarks < 80) {
//     console.log("Good luck next time");
//   } else if (friendMarks < 60 && friendMarks >= 40) {
//     console.log("I have to unseen his message");
//   } else if (friendMarks < 40) {
//     console.log("I just blocked him from everywhere");
//   }
// } else {
//   console.log("Go to home and act sad")
// }


//?! Practice task 5
//? Ternary Operator

// const num1 = 30;
// const num2 = 20;

// let result;

// if (num1 > num2) {
//   result = num1*2;
//   console.log(result);
// } else {
//   result = num1 + num2;
//   console.log(result);
// }


//?! Practice task 6
//? Ticket Fare Calculator

// let age = 68;
// let isStudent = false;
// const regularTicketFare = 800;
// let ticketFare; 

// if (age < 10) {
//   //? 100% discount
//   const discountTicket = regularTicketFare * 100 / 100;
//   ticketFare = regularTicketFare - discountTicket;
//   console.log("Your Ticket Fare is free bcz you are below 10 :", ticketFare);
// } else if (isStudent) {
//   //? 50% discount
//   const discountTicket = regularTicketFare * 50 / 100;
//   ticketFare = regularTicketFare - discountTicket;
//   console.log("50% Discount Ticket Fare : " ,ticketFare);
// } else if (age >= 60) {
//   //? 15% discount
//   const discountTicket = regularTicketFare * 15 / 100;
//   ticketFare = regularTicketFare - discountTicket;
//   console.log("15% Discount Ticket Fare : " ,ticketFare);
// } else {
//   console.log("Regular Ticket Fare : " , regularTicketFare);
// }




//?! this concept is for React JS !! just looking a spread operator about it that how it actually works in JS or React JS

// let studentData = [1,2,3,4];

// console.log(studentData);

// let studentData2 = [...studentData];

// studentData2.pop();

// console.log(studentData);
// console.log(studentData2);