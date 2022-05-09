function starPatern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n + 2; j++) {
      if (i + j === n + 1) {
        pattern = "* ";
      } else {
        pattern = "  ";
      }
      result += pattern;
    }
    console.log(result);
  }
}
starPatern(5);

// console.log("* * * * * * *");
// console.log("  * * * * *  ");
// console.log("    * * *    ");
// console.log("      *      ");
