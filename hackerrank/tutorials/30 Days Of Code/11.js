function maxHourGlass(e) {
  let max = -9 * 7;
  for (let i = 0; i < e.length; i++) {
    for (let j = 0; j < e[i].length; j++) {
      if (j + 2 < 6 && i + 2 < 6) {
        let sum =
          e[i][j] +
          e[i][j + 1] +
          e[i][j + 2] +
          e[i + 1][j + 1] +
          e[i + 2][j] +
          e[i + 2][j + 1] +
          e[i + 2][j + 2];
        if (sum > max) max = sum;
      }
    }
  }
  return max;
}

console.log(
  maxHourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ])
);
