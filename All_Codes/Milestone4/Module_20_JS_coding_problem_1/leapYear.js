//? Leap year in js

/**
 * ? Simple Logic: Not 100% true;
 * ? Year will be leap year if the year is divisible by 4;
 * ? those year that is not divisible by 100 and if the year is divisible by 4 then it's a leap year;
 * ? and also those year will divisible by 400 is also a leap year
 * */ 


function isLeapYear(year) {
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
    return `${year} is a leap year`;
  }
  return `${year} is not a leap year`;
}

// console.log(isLeapYear(1800));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2013));
// console.log(isLeapYear(2014));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));
// console.log(isLeapYear(2100));