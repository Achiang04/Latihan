function starPatern(n) {
  for (let i = 0; i <= n; i++) {
    let result = "";
    for (let j = 0; j <= n; j++) {
      if (i + j > n) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    console.log(result);
  }
}
starPatern(9);
starPatern(5);
