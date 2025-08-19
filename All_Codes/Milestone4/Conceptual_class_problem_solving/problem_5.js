//? Problem-5

function calculateSleepTime(times) {
  // You have to write your code here
  let sumOfSeconds = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sumOfSeconds += time;
  }
  let getHour = Math.floor(sumOfSeconds / 3600);
  let getMin = Math.floor((sumOfSeconds % 3600) / 60);
  let getSec = Math.floor(sumOfSeconds % 60);

  const object = { hour: getHour, minute: getMin, second: getSec };
  return object;
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime([1000, 2000, 725]));
console.log(calculateSleepTime([100, 3800]));
console.log(calculateSleepTime([]));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([100, 3800, "90"]));


