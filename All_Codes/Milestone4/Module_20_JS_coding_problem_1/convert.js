//?
//? 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

// console.log(inchToFeet(75),'feet');

function inchToFeet2 (inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result =  feetNumber+ " ft "+ inchRemaining + " inch";
  return result;
}

// console.log(inchToFeet2(75));

function cmToFeet(cm) {
  const feet = cm / 30.48;
  return feet;
}

// console.log(Number(cmToFeet(168).toFixed(2)),'feet')


function milesToKM(miles) {
  const km = (miles * 1.60934).toFixed(2);
  return km;
}

// console.log(Number(milesToKM(5)),'Kilometers');


function kmToMiles(km) {
  const miles = (km / 1.609).toFixed(3);
  return miles
} 

console.log(kmToMiles(5));