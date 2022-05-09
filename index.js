function getSame(input1, input2, input3) {
  let array = [];
  for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      for (let k = 0; k < input3.length; k++) {
        if (input1[i] === input2[j] && input1[i] === input3[k]) {
          //   console.log(input1[i]);
          array.push(input1[i]);
          //   return input1[i];
        }
      }
    }
  }
  return array;
}

function getSame1(input1, input2, input3) {
  let array = [];
  for (let i = 0; i < input2.length; i++) {
    if (input2[i] === input1[i + 1] && input2[i] === input3[i + 1]) {
      array.push(input2[i]);
    }
  }
  console.log(array);
  return array;
}

let input1 = [1, 5, 10, 20, 40, 80];
let input2 = [6, 7, 20, 80, 100];
let input3 = [3, 4, 15, 20, 30, 70, 80, 120];

console.log(getSame(input1, input2, input3));
console.log(getSame1(input1, input2, input3));
