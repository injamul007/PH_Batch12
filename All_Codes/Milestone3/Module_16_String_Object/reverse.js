//? Reverse in JS

const sentence = "I am learning Web Development";

// console.log(sentence.split(' ').reverse().join(' '))
// console.log(sentence);

let reverse = '';
for (let i = 0; i < sentence.length; i++) {
  // console.log(sentence[i]);
  reverse = sentence[i] + reverse;
}

// console.log(reverse)