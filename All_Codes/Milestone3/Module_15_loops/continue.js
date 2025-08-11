//?

//? Continue --> Skip rest of the code for this iteration;
//? Break --> I am done with this loop, loop end;

// for (let i = 1; i<= 20; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i)
// }

let n = 0;

while (n < 50) {
  n++;
  if (n % 5 !== 0) {
    continue;
  }
  console.log(n)
}