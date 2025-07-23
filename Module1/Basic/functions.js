// types of functions
// Deceleration - normal one
// Expression - const -- = function(){}
// Arrow fn = const -- = () => {}
// Anonymous Fn = setTimeOut(fn(){}) - use in callback

// functions
function demo() {
  return console.log("hello");
}
// demo(); // calling the function

function greet(value) {
  return console.log(`Namaste ${value}`);
}
// greet("Ishwar");
// greet("Ishwar Mundhe");

function addTwoNum(a, b) {
  let add = a + b;
  return console.log(add);
}
//addTwoNum(2, 3);

function mul(a, b) {
  let add = a * b;
  return console.log(add);
}
//mul(2, 10);

//sqare and return value
function square(x) {
  let sq = x * x;
  return sq;
}
let value = square(2);
//console.log(value);

// qn
function vote(age) {
  if (age >= 18) {
    console.log("Your are eligiable");
  } else if (age <= 0) {
    console.log("Invalid Input");
  } else {
    console.log("you are underage");
  }
}
//vote(-2);

const EvenOdd = (number) => {
  if (number % 2 === 0) {
    console.log(`Number ${number} is Even`);
  } else if (typeof number !== number) {
    console.log("Please enter valid Number");
  } else {
    console.log(`Number ${number} is Odd`);
  }
};
EvenOdd(2);
