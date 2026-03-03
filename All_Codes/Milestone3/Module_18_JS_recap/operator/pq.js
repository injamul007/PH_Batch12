//?

//? q1 . Get user to input two number using prompt and print their possible arithmetic results.

// let num1 = parseInt(prompt('Enter 1st number: '));
// let num2 = parseInt(prompt('Enter 2nd number:  '));

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

//? q2 . Can you chain assignment operators?

// let a = b = c = 15;

// console.log(a);
// console.log(b);
// console.log(c);

//? q3 . Get user to input a number using prompt and check whether even or odd using ternary operator.

// let numBer = parseInt(prompt('Enter your number: '));

// let results = numBer % 2 === 0? "it's Even" : "it's Odd";

// console.log(numBer + " =" ,results);

//? q4 . What is the Final value of x?

// let x = 5;
// x += 3; //8
// x -= 2; //6
// x *= 4; //24
// x /= 6; //4
// x %= 3; //1

// console.log(x);

//? q5 . Check if a number is within a range between 10 and 20(inclusive).

// let getNumber = parseInt(prompt('Enter the number'));

// let results = (getNumber >= 10 && getNumber <= 20) ? "it's inside" : "it's not inside";

// console.log(results);

//? q6 . Write a program to find the largest number between 3 numbers using ternary operator/if-else.

// let a = 415;
// let b = 214;
// let c = 323;

// let results = a>b? (a>c ? a : c +"1") : (b>c ? b : c+"2");

// console.log(results);

// if(a>b) {
//   if(a>c) {
//     console.log(`${a} if condition - if`);
//   } else {
//     console.log(`${c} if condition - else`);
//   }
// } else {
//   if(b>c) {
//     console.log(`${b} else condition - if` );
//   } else {
//     console.log(`${c} else condition - else`);
//   }
// };

//? q7 . Take an email and password from the user. if the email or password is incorrect or does not match the stored values, display the message "invalid email or password". if both email and password match the stored values, display "You are logged in successfully!".

// let storedEmailId = "3";
// let storedEmailPass = "4";

// let userEmailId = prompt('Enter Your Email id');
// let userEmailPass = prompt('Enter Your Email password');

// if (userEmailId !== storedEmailId || userEmailPass !== storedEmailPass) {
//   console.log("Invalid Email id or password");
// } else {
//   console.log("You are logged in successfully!");
// };

let result = (4 == 4 && 5 == 5) ? "valid email and pass" : "not valid email and pass"
console.log(result)


//? q8 . What will be the output of following JavaScript code?

// let a = 5, b = 3, c = 2;

// let result = a++ + --b * c-- - ++a + b-- / --c //? c--;
// //?           5  +   2 * 2   -  7  + 2   /   0
// //?           5  +   4 - 7 + 2 / 0
// //?           11 - 7 / 0
// //?           4 / 0 == infinity because of 0 

// console.log("a:", a)
// console.log("b:", b)
// console.log("c:", c)
// console.log("result:", result);

//? q9 . What is the output of console.log(~a) where a=0

// let a = 0;

// console.log(~a);