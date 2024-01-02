function binary(int) {
  if (int > 0) {
    return `${int} =  ${int.toString(2)}`;
  }
}
// console.log("----------------------");
// console.log(binary(1));
// console.log(binary(2));
// console.log(binary(4));
// console.log(binary(16));
// console.log(binary(32));
// console.log(binary(64));
// console.log(binary(128));
// console.log(binary(256));

function addBinary(a, b) {
  let hasil = a + b;
  return binary(hasil);
}

// console.log("----------------------");
// console.log(addBinary(16, 32));
// console.log(addBinary(64, 128));

function calculateBinary(a, b, op) {
  let hasil;
  if (op === "+") {
    hasil = a + b;
  } else if (op === "-") {
    hasil = a - b;
  } else if (op === "*") {
    hasil = a * b;
  } else if (op === "/") {
    hasil = a / b;
  } else {
    console.log("Invalid Operator");
  }

  return binary(hasil);
}

// console.log("----------------------");
// console.log(calculateBinary(32, 16, "-"));
// console.log(calculateBinary(64, 128, "+"));
// console.log(calculateBinary(2, 4, "*"));
// console.log(calculateBinary(8, 2, "/"));

function addBinaryNumber(a, b) {
  a = parseInt(a, 2);
  b = parseInt(b, 2);
  let hasil = a + b;
  return binary(hasil);
}

// console.log("----------------------");
// console.log(addBinaryNumber(110, 111));

function evalBinaryNumber(a) {
  let nums = /(\d+)/g;
  a = a.replace(nums, function (e) {
    return parseInt(e, 2);
  });
  return binary(eval(a));
}

console.log("----------------------");
console.log(evalBinaryNumber("110+111"));
