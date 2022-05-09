function starPatern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      if (i - j < 1) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    console.log(result);
  }
}
starPatern(9);

console.log("=====================");

function starPatern1(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      if (i - j > 0) {
        result += "  ";
      } else {
        result += "* ";
      }
    }
    console.log(result);
  }
}
starPatern1(9);
