// Q1. find the element into the array and log the index of it , if array is not present the return -1

function searchElement(x) {
  let arr = [4, 2, 0, 10, 8, 30];
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      console.log(arr.findIndex(i));
    } else if (x !== arr[i]) {
      console.log("-1");
    }
  }
}
//searchElement(10);
//searchElement(arr,x)=> index[x]

// solution -
function searchElementSol(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

//let arr = [4, 2, 0, 10, 8, 30];
//const result = searchElementSol(arr, 30);
//console.log(result);

// Q2. array give total negative numbers

function NegativeNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
//let arr = [-2, -19, -17, 0, 1, -10, -4, 8];
//const Num = NegativeNum(arr);
//console.log(Num);

//@.3
function largestNumber(arr) {
  let largestNumber = -Infinity;
  // smallest = + Infinity , arr[i]< largestNumber
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
// let arr = [2, 10, 11, 9, 0, 8, -7, 112];
// const result = largestNumber(arr);
// console.log(result);

//Q4. 2nd largest number in array

function SecondLargestNumberR(arr) {
  let firstNumber = -Infinity;
  let secondNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstNumber) {
      secondNumber = firstNumber;
      firstNumber = arr[i];
    }
  }
  return secondNumber;
}

// sol

// corner cases
// array Empty , one Element , array -ve , Duplicate array
const ArrayList = () => {
  let FL = -Infinity;
  let SL = -Infinity;

  if (arr.length < 2) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > FL) {
      SL = FL;
      FL = arr[i];
    } else if (arr[i] > SL && arr[i] !== FL) {
      SL = arr[i];
    }
  }
  return SL;
};
let arr = [1, 1, 20, 20];
const result = ArrayList(arr);
console.log(result);

//Q .
