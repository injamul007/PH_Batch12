//?

//? Task-1 

// let str = "I am a very good and hardworking boy";

// let countA = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i].toLowerCase() === 'a') {
//     countA++;
//   }
// }
// console.log('letter a :',countA);


//? Task-2

let str2 =  'I Am a very good And A hardworking Man';

let count_a = 0;
let count_A = 0;

for (let i = 0; i < str2.length; i++) {
  if (str2[i] === 'a') {
    count_a++;
  } else if (str2[i] === 'A') {
    count_A++;
  }
}

// console.log("Letter a :", count_a);
// console.log("Letter A :", count_A);

//? Task-3 

let str3 =  'I Am a very good And A hardworking Man';
let str3_lowercase = str3.toLowerCase();

let vowels = ["a","e","i","o","u"];
let allPresent = true;

// for (let i = 0; i < vowels.length; i++) {
//   if (!str3_lowercase.includes(vowels[i])) {
//     allPresent = false;
//     break;
//   }
// }

// if (allPresent) {
//   console.log("All the vowel counts here")
// } else {
//   console.log("Not all the vowel are here")
// }


