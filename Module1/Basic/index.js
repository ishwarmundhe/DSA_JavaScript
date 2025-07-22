const resp = "reps";
console.log(resp); // string
console.log(7); //number
console.log(true); // boolean

// const , let , var types of decltn
const a = 12;
const b = 32;
const c = a + b;
const dev = a / b;
const mod = a % b;
const mul = a * b;

console.log(c);
console.log(dev);
console.log(mod);
console.log(mul);

// arrays
const array = [1, 2, 3, 55, 66, 7];
const array2 = [2, 3, 4];
const stringArray = ["str1", "str2", "str3"];
const arrayinside = [1, 2, 3, [4, 5, 6, ["array 3"]], 7, 8];
console.log(array);
console.log(array[2]);
console.log(array[8]);

console.log(array.length);
console.log(array + array2);
console.log(array[3] + array2[1]);
console.log(array + stringArray);
console.log(array[3] + stringArray[1]);
console.log(array[3] / stringArray[1]); // NAN
console.log(arrayinside);
console.log(arrayinside[3][0]);
console.log(arrayinside[3][3]);
console.log(arrayinside[3]);
console.log(array[3] + " " + arrayinside[3]);

//Objects
let obj = {
  name: "ish",
  age: 12,
  voter: true,
};
console.log(obj);
console.log(obj.age); // key-value access
console.log(obj.age + obj.name);
