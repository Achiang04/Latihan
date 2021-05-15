function plusMinus(arr) {
  let counter0 = 0;
  let counterMinus = 0;
  let counterPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter0++;
    } else if (arr[i] > 0) {
      counterPos++;
    } else {
      counterMinus++;
    }
  }

  console.log(counterPos / arr.length);
  console.log(counterMinus / arr.length);
  console.log(counter0 / arr.length);
}
plusMinus([-4, 3, -9, 0, 4, 1]);
