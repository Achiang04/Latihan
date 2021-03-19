function getSecondLargest(nums) {
  // Complete the function
  let terbesar = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > terbesar) {
      terbesar = nums[i];
    }
  }

  let temp = terbesar;
  let result;

  for (let i = 0; i < nums.length; i++) {
    let hasil = terbesar - nums[i];
    if (hasil !== 0 && temp > hasil) {
      temp = hasil;
      result = nums[i];
    }
  }
  return result;
}

console.log(getSecondLargest([2, 3, 5, 6, 6])); // 5
console.log(getSecondLargest([1, 2, 3, 4, 5])); // 4
console.log(getSecondLargest([10, 9, 8, 7, 6])); // 9
