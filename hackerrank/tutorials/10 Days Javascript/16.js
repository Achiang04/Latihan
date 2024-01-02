function getMaxLessThanK(n, k) {
  let temp;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      temp = i & j;
      if ((temp !== 0) & (temp > result) & (temp < k)) {
        result = temp;
      }
    }
  }
  return result;
}
console.log(getMaxLessThanK(5, 2)); // 1
console.log(getMaxLessThanK(8, 5)); // 4
console.log(getMaxLessThanK(2, 2)); // 0
console.log(getMaxLessThanK(955, 236)); // 235
console.log(getMaxLessThanK(132, 107)); // 106
