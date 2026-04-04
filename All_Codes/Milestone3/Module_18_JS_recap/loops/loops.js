//? for loop

// let str = "tausif hoque";

// for(let i = 0; i<str.length; i++) {
// console.log(str[i], i+1);
// };

// for (let char of str) {
//   console.log(char);
// }

// for (let char in str) {
//   console.log(char);
// }

// Q 1** calculate how many vowel and consonant are in a given string using for loop / for of loop

// let string = "Hello World, how are you";

// let vowelCount = 0;
// let consonantCount = 0;

// for (let i = 0; i<string.length; i++) {
//   const vowelStr = "aeiou";
//   const char = string[i].toLowerCase();
//   if(vowelStr.includes(char)) {
//     vowelCount++;
//   } else if (char >= "a" && char <= "z") {
//     consonantCount++;
//   }
// };

// console.log('vowel = ' + vowelCount);
// console.log('consonant = ' + consonantCount);

//? Q2. Calculate sum of first 'n' numbers.

// let n = Number(prompt('Enter your n number'));

// let sum = 0;
// for(let i = 1; i<=n; i++) {
//   sum += i;
//   console.log(sum);
// }

//? Q3. Calculate sum of 'm' to 'n' numbers.

// let n = Number(prompt("Enter your starting number"));
// let m = Number(prompt("Enter your ending number"));

// let sum = 0;
// for (let i = n; i<=m; i++) {
//   sum += i;
//   console.log(sum);
// }

//? Q4. Create a "Number Knock" game. (ask the user to keep guessing the number until the user enters correct guess).

// let computerNumber = 55;
// let guess = null;

// while(guess !== computerNumber) {
//   guess = Number(prompt("Enter your number"));

//   if(isNaN(guess) || !guess) {
//     alert('Enter a valid number');
//   } else if (guess < computerNumber) {
//     alert('Your number is too low');
//   } else if (guess > computerNumber) {
//     alert('Your number is too high');
//   } else {
//     alert('Congratulation !! Your number is correct');
//   }
// }

//? Q4. password checker (fixed attempt);

// let password = "alpha";
// let noOfAttempt = 0;
// let userPassword = null;

// while(password !== userPassword && noOfAttempt < 3) {
//   userPassword = prompt('enter your password');
//   noOfAttempt ++;
//   if (!userPassword) {
//     alert(`Please enter a valid password and your attempt is = ${noOfAttempt - 3}`);
//     console.log("your noOfAttempt is = ",noOfAttempt);
//   } else if (userPassword === password) {
//     alert(`congratulations !! Your password is match with computer password and your attempt is = ${noOfAttempt - 3}`);
//     console.log("your noOfAttempt is = ",noOfAttempt);
//   } else if (noOfAttempt >= 3) {
//     alert(`Your attempt is over = ${noOfAttempt - 3}`);
//   } else {
//     alert(`password is not match with computer password ,and your attempt is = ${noOfAttempt - 3}`);
//       console.log("your noOfAttempt is = ",noOfAttempt);
//   }
// };

//? Q5. Create a program to find the factorial of n;

// let n = 5;
// let factorial = 1;

// for (let i = 1; i<=n; i++) {
//   factorial *= i;
// }

// console.log(factorial);

//? Q6. print the following pattern ;

// for (i = 1; i<=5; i++) {
//   let str = "";
//   for (j = 1; j <= i; j++) {
//     str += j + " ";
//   }
//   console.log(str)
// }

//? Q7. build a simple text-based adventure game !;


// let playAgain = true;

// while (playAgain) {
//   alert("You wake up in a forest");
//   let userChoice = prompt("Will you go 'left' or 'right' ??");

//   if (userChoice === "left") {
//     alert("You walk into a swamp! You see something shiny in the mud");
//     userChoice = prompt("Do you pick it up ?? (yes or no)");
//     if (userChoice === "yes") {
//       alert("It's a magical stone ! you are teleported to safely. You win");
//     } else if (userChoice === "no") {
//       alert("you sink slowly into the mud. Game Over");
//     }
//   } else if (userChoice === "right") {
//     alert("You find a cave...!");
//     userChoice = prompt("Do you enter the cave?? (yes or no)");
//     if (userChoice === "yes") {
//       alert("A dragon wakes up and chases you away. You barely escape !");
//     } else if (userChoice === "no") {
//       alert(
//         "you set up camp outside the cave. A peaceful night under the stars. You will be alive"
//       );
//     }
//   }

//   userChoice = prompt("Do you want to play again?? (yes or no)");
//   if (userChoice === "yes") {
//         playAgain = true;
//     } else if (userChoice === 'no') {
//         playAgain = false;
//         alert("thanks for playing the game !");
//   }
// }



// for(let i = 0; i <= 20; i++) {
//   console.log(i)
// }

// let i = 0
// while(i <= 10) {
//   console.log(i)
//   i++
// }

// 1. print all even numbers 0 to 100

// for(let i = 0; i <= 100; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   }
// }

//? 2. calculate how many vowels are in a string using loop

// let str = 'hello'
// let countVowel = 0
// let countConsonant = 0

// for (let i = 0; i<str.length; i++) {
//   if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//     countVowel++
//   } else {
//     countConsonant++
//   }
// }

// console.log(countVowel, countConsonant)


//? 1. Calculate sum of first "n" numbers

// let sum = 0

// let n = Number(prompt('Enter your fist n Number'))

// for(let i = 0; i <= 10; i++) {
//   sum += i
// }

// console.log(sum)

//? 2. calculate the sum of numbers from "m" to "n"

//  let sum = 0

// let m = Number(prompt('Enter your starting Number'))
// let n = Number(prompt('Enter your Ending Number'))

// for(let i = m; i <= n; i++) {
//   sum += i
// }


//? 3. print all odd number from 0 to "n"

// let n = Number(prompt('Enter your Ending Number'))

// for(let i = 0; i <= 20; i++) {
//   if(i % 2 !== 0) {
//     console.log(i)
//   }
// }

//? Create a "Number Knock" game. (as the user to keep guessing the number until the user enters correct guess).

// let computerGuess = 3
// let userGuess = null;

// while(userGuess !== computerGuess) {
//   userGuess = Number(prompt('guess the number'))
//   if (isNaN(userGuess) || userGuess == "") {
//     alert('this is not an valid number')
//   } else if(userGuess > computerGuess) {
//     alert('your number is high, try again')
//   } else if (userGuess < computerGuess) {
//     alert('your number is low, try again')
//   } else {
//     alert('your guess is correct')
//   }
// }

//? 5. simple password checker (fixed attempt)

// let password = "alpha"
// let noOfAttempt = 0;
// let userPass = null;

// while(password !== userPass && noOfAttempt < 3) {
//   userPass = prompt('Enter your password')
//   if(password === userPass) {
//     alert(`Password matched successfully with ${noOfAttempt+1} attempt`)
//   } else if (noOfAttempt > 3) {
//     alert('Your attempt is over, try again')
//   } else {
//     alert(`password did not matched, try again with ${noOfAttempt} attempt `)
//     noOfAttempt++
//   }
// }

//? 6. Create a program to find the factorial of "n"

// let n = 7;
// let factorial = 1;

// for(let i = 1; i <= n; i++) {
//   factorial = factorial * i
// }

// console.log(factorial)

//? print the following pattern. (build it for ntn numbers)

// for(let i = 1; i<=5; i++) {
//   let str = ""
//   for(let j = 1; j <= i; j++) {
//     str += j + " "
//   }
//   console.log(str)
// }



// const user = {
//   name: 'boss',
//   team: 'next level team',
//   age: 132
// }

// for(const [key, value] of Object.entries(user)) {
//   console.log(key, value)
// }

// console.log(Object.entries(user))