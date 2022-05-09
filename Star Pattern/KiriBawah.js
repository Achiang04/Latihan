function starPatern(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        result += "* ";
      }
    }
    console.log(result);
  }
}
starPatern(9);
