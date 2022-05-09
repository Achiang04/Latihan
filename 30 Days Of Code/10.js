function maxBinenrValue(e) {
  let binner = (e >>> 0).toString(2);
  console.log(binner);
  let counter = 0;
  let result = 0;
  for (let i = 0; i < binner.length; i++) {
    if (binner[i] === "1") {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > result) {
      result = counter;
    }
  }

  return result;
}

console.log(maxBinenrValue(125)); // 5
console.log(maxBinenrValue(5)); // 1
console.log(maxBinenrValue(13)); // 2
console.log(maxBinenrValue(439)); // 3
console.log(maxBinenrValue(524275)); // 15

// for (let i = 0; i < binner.length; i++) {
//     {
//       binner[i] === "1" ? counter++ : (counter = 0);
//     }
//   }
//   result = counter;
