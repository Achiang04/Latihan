function modifyArray(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i] * 2);
    } else {
      result.push(nums[i] * 3);
    }
  }
  return result;
}

console.log(modifyArray([1, 2, 3, 4, 5])); //  [3, 4, 9, 8, 15 ]
