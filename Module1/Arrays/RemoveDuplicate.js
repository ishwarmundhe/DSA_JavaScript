// //

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  console.log(x + 1);

  return x + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);

// if ([] == true) {
//   console.log("1");
// } else {
//   console.log("2");
// }
