// loops
for (let i = 0; i < 10; i++) {
  console.log("Loop");
}
for (let i = 0; i <= 4; i++) {
  console.log("Loop");
} // goes form. 0 to 5

for (let i = 5; i > 0; i--) {
  console.log(`loop ${i}`);
}

for (let i = 5; i < 4; i++) {
  console.log(`loop ${i}`);
} // not run

// infinite loop
// for (let i = 1; i > 0; i++) {
//   console.log(`loop ${i}`);
// } // not run

// array and loops
let arr = [1, 2, 3, 55, 66, 34, 44, 332, 12];
for (let i = 1; i < 10; i++) {
  console.log(arr[i]);
}
// for printing even num
for (let i = 1; i < 10; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// While Loop
let i = 0;
while (i < 10) {
  // do optn here
  //console.log("s");

  i++;
}
