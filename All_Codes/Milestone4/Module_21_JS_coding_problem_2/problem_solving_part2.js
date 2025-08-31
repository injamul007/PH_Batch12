//?Task -1:
//?Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137, 55];

function lowestNumber(arr) {
  let lowest = arr[0];
  for (const el of arr) {
    if (el < lowest) {
      lowest = el;
    }
  }
  return lowest;
}

// console.log(lowestNumber(heights2));

//? Task-2
//? Find the friend with the smallest name.

const heights = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(arr) {
  let smallest = arr[0];
  for (const el of arr) {
    if (el.length < smallest.length) {
      smallest = el;
    }
  }
  return smallest;
}

// console.log(smallestName(heights));

//?Task-4:
//? You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Realm", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el.price;
  }
  let averagePhonePrice = sum / arr.length;
  return Number(averagePhonePrice.toFixed(2));
}

// console.log(findAveragePhonePrice(phones))

//? Task -5: (Hard)
//? For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalMonthlySalary(arr) {
  let currentSalary = 0;
  for (const el of arr ) {
    currentSalary += el.starting + (el.experience * el.increment)
  }
  let monthlySalary = currentSalary / 12;
  return monthlySalary;
}

console.log(totalMonthlySalary(employees));