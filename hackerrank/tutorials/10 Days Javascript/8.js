function isPositive(a) {
  try {
    if (a === 0) {
      return "Zero Error";
    } else if (a < 0) {
      return "Negative Error";
    } else if (a > 0) {
      return "YES";
    }
  } catch (e) {
    console.log(e);
  }
}

console.log(isPositive(2)); //YES
console.log(isPositive(-1)); //Negative Error
console.log(isPositive(20)); //YES
console.log(isPositive(3)); //YES
console.log(isPositive(-1)); //Negative Error
