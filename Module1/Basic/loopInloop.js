// loop within loop
function loop() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(`${i} ${j} `);
    }
  }
}
//loop();

function loop2() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
      console.log(`${i} ${j} `);
    }
  }
}
//loop2();

//
function loop2() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`${i} ${j} `);
    }
  }
}
//loop2();
function loopReverse() {
  for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
      console.log(`${i} ${j} `);
    }
  }
  // if j<=0
}
//loopReverse();

function loop4() {
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(`${i} ${j} `);
    }
  }
}
//loop4();

function loop5() {
  for (let i = 5; i > 0; i++) {
    for (let j = 0; j < i; j++) {
      console.log(`${i} ${j} `);
    }
  }
}
//loop5();
// assending
function pattern2() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
}
//pattern2();

//
function pattern3() {
  let i = 0;
  while (i < 3) {
    let j = 0;
    while (j < 2) {
      console.log(`i: ${i}, j: ${j}`);
      j++;
    }
    i++;
  }
}
//pattern3();

// triangle patten
function pattern10() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      //or j < i+1;
      row += "* ";
    }
    console.log(row);
  }
}
//pattern10();

// star patten
function starPatten() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
//starPatten();

// num patten

function NumPatten(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}
//NumPatten(5);
// 1;
// 22;
// 333;
// 4444;
// 55555;

function Patten12(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      // for stat "*"
      row = row + j + 1;
    }
    console.log(row);
  }
}
//Patten12(5);

function HardPatten(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    // adding empty space
    for (let j = 0; j <= n - i; j++) {
      row = row + ".";
    }
    // adding stars
    for (let k = 0; k <= i; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
//HardPatten(5);
// for random patten let Switch = 1;
function newFn(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let Switch = 1;
    for (let j = 1; j <= i; j++) {
      row = row + Switch;
      if (Switch == 1) {
        Switch = 0;
      } else {
        Switch = 1;
      }
    }

    console.log(row);
  }
}
newFn(8);
// 1;
// 10;
// 101;
// 1010;
// 10101;
// 101010;
