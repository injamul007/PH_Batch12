//?

// let firstName = "injamul";
// let lastName = "hoque";

// let fullName = firstName + " " + lastName ;
// let fullName = `${firstName} ${lastName}`;

// console.log(`My Name is ${fullName}`);

// let a = 10;
// let b = 20;
// let c = 30;

// console.log(`${a} ${b} ${c}`);

// this is called string interpolation = ${} ;

// let gamma = `str = ${3 + 3 + 5 + 9 - 7}`;

// console.log(gamma);

// let str = new String("boss"); //? this is an object form

// console.log(str);

// let newArr = new Object();

// newArr.myName = "Boss";

// console.log(newArr);

// let str2 = "hello \nhow are you?"; //? \n is escape character

// console.log(str2);

// let str3 = 'hello " beta'; //? \ is a escape character;
// console.log(str3);

// let str4 = "Hello World";

// str4[7] = "u"; //? this will not change bcz strings are immutable;

// console.log(str4);

// let str5 = "";
// for (char of str4) {
//   str5 += char + " ";
// }
// console.log(str5)

// for (key in str4) {
//   console.log(key)
// }

// let arr = [1,2,3,4,5];

// arr[2] = 300; //? this will change bcz arrays are mutable

// console.log(arr);

//? string properties and method in javascript !

// *** methods -> parenthesis are added in the method !
// *** properties -> parenthesis are not added in the properties !

//? Methods

// let str = "hello sir ! how are you sir?"; //?original strings arr immutable;

// let replaceStr = str.replaceAll("sir","brother");
// // let newStr =  str.toUpperCase();

// console.log(str);
// console.log(replaceStr);

// let newStr = "Hello World ! how are you ?"

// let includeStr = newStr.includes('are');

// console.log(includeStr);

// let checkIndex = newStr.indexOf('w');

// console.log(checkIndex);

// let username = "@boss007";

// let sliceUsername = username.slice(1,5);

// console.log(sliceUsername);

// let splitStrings = "alpha beta gamma"

// console.log(splitStrings.split(" "));

//? Q1. Create a program to take full name from the user and generate a username start with @, followed by their full name and ends with underscore followed by the length of fullname

// let fullName = prompt('Enter your full name');

// console.log(`@${fullName.replaceAll(" ","").trim()}_${fullName.length}`);



//? Q2. Take a string and a character from the user and:
//* a. count how many times that character appears in the string
//* b. Case-insensitive version
//* c. Find all Occurrence Positions


// let userGivenString = prompt("Enter any string");
// console.log(userGivenString);

// let userGivenCharacter = prompt("Enter any one Character");
// console.log(userGivenCharacter);

// userGivenCharacter = userGivenCharacter?.trim().toLowerCase();

// let characterCount = 0;

// if (!userGivenCharacter) {
//   alert("Please give valid input");
// } else if (userGivenCharacter.length !== 1) {
//   alert("Please give one character");
// } else {
//   for (let index in userGivenString) {
//     if (userGivenString[index].toLowerCase() === userGivenCharacter) {
//       characterCount++;
//       console.log("The Character is =", userGivenCharacter, "and it's indexes are", index, "and Total Numbers of  Character is", characterCount);
//     }
//   }
// };


//? Q3. Count the words present in a given string

// let str = "hello im the boss here";

// console.log(str.split(' '));



