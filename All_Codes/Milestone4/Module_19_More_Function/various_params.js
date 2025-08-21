//?

/**
 * for a given string tell me whether it has even number of character or not
*/

function evenSizedString(str) {
  const evenSized = str.length;
  console.log(evenSized);
  if (evenSized % 2 === 0) {
    console.log("Even Sized")
    return true;
  } else {
    console.log("Odd Sized")
    return false;
  }
}

// evenSizedString("dhaka");
// evenSizedString("faka");

function doubleOrTriple(number, double) {
  if(double === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOfElements (number) {
  const len = number.length;
  return len;
}

// console.log(numberOfElements([12,43,545,34,2,4]))

function getAge (person) {
  // const age = person.age;
  const name = person.name;
  return name;
}

// console.log(getAge(person = {name: "boss", age: 30}));


