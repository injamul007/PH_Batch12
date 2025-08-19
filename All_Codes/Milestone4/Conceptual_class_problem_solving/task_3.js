//? Task-3

function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let countVowel = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      countVowel++;
    }
  }
  return countVowel;
}

console.log(countVowels("data"));
console.log(countVowels("jhankar miA"));
console.log(countVowels("Dulal uddin"));
console.log(countVowels(["jhankar miA"]));
console.log(countVowels(109));
console.log(countVowels("108"));