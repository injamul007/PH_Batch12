//?

// 1. const -->  value not going to change
// 2. let --> value might change
// 3. var --> should not use (unless exceptional case)

const price = 500; // number
const name = "kirkir ali khan"; // string
const isPoor = false; //boolean
const friends = ["Elon", "Mark", "Bill", "Jeff"]
const student = {
  class: 9,
  name: "Tomi khan",
  age: 17,
  address: "Kochu khet",
}

// condition

if (price > 1000) {
  console.log("too expensive ! not for me");
} else if (price > 500) {
  console.log("may be i can buy this")
} else {
  console.log("within my budget")
}


//? Loop

let pushUp = 0;

while (pushUp < 10) {
  // console.log("PushUp", pushUp);
  pushUp++;
}

for (let i = 0; i <= 10; i++) {
  console.log(i)
}