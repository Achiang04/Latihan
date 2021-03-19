function diagonalDifference(arr) {
  // Write your code here
  let result;
  let kiri = 0;
  let kanan = 0;
  for (let i = 0; i < arr.length; i += 4) {
    kiri += arr[i];
  }
  console.log("kiri", kiri);

  for (let i = 2; i < arr.length; i += 2) {
    // kanan += arr[i];
    console.log(arr[i]);
  }
}

diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]);
