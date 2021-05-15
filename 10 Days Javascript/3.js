function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
    // console.log(result);
  }
  return result;
}

console.log(factorial(5)); // 120
