//? Practice Problem Number 1.

/* You went to the supermarket to buy some orange and apples. Calculate how much money the shopkeeper will return */

var MoneyInHand = 1000;
var orange1Kg = 300;
var apple1Kg = 400;

var shopkeeperWillReturn = (MoneyInHand - (orange1Kg+apple1Kg));

// console.log(shopkeeperWillReturn);

//? Practice Problem Number 2.

/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, of a student */

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 60.25;

var averageMarksOfStudent = ((Mathematics+Biology+Chemistry+Physics) / 4);

// console.log(Number(averageMarksOfStudent.toFixed(2)));


//? Practice Problem Number 3.

/* You task is to divide the given number by 5 and show the remainder as the output */

var num = 129;

var RemainingRemainder = num % 5

// console.log(RemainingRemainder);


//? Practice Problem Number 3.

/* What will be the result of the following codes */

// var a = isNaN("11");

// var a = isNaN(2-10);

// console.log(a)


console.log(NaN === NaN); //? this NaN is not even equal to itself

