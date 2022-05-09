const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

function checkWinner(data) {
  let result = false;
  let counter = 0;
  for (let i = 0; i < win.length; i++) {
    counter = 0;
    for (let j = 0; j < data.length; j++) {
      if (
        win[i][0] === data[j] ||
        win[i][1] === data[j] ||
        win[i][2] === data[j]
      ) {
        counter++;
      }
    }
    if (counter === 3) {
      result = true;
    }
  }
  if (result) {
    return "win";
  }
  return "lose";
}

console.log(checkWinner([3, 4, 5])); // win - 3, 4, 5
console.log(checkWinner([0, 1, 2, 4])); // win - 0, 1, 2
console.log(checkWinner([7, 2, 4, 8, 5])); // win - 2, 5 ,8
console.log(checkWinner([1, 2, 3])); // lose
console.log(checkWinner([1, 2, 3, 4])); // lose
console.log(checkWinner([0])); // lose
console.log(checkWinner([0, 2])); // lose

console.log("\n");

function checkWinner2(data) {
  let result = false;
  let counter = 0;
  win.map((e) => {
    counter = 0;
    data.map((ee) => {
      if (e[0] === ee || e[1] === ee || e[2] === ee) {
        counter++;
      }
    });
    if (counter === 3) {
      result = true;
    }
  });
  if (result) {
    return "win";
  }
  return "lose";
}

console.log(checkWinner2([3, 4, 5])); // win - 3, 4, 5
console.log(checkWinner2([0, 1, 2, 4])); // win - 0, 1, 2
console.log(checkWinner2([7, 2, 4, 8, 5])); // win - 2, 5 ,8
console.log(checkWinner2([1, 2, 3])); // lose
console.log(checkWinner2([1, 2, 3, 4])); // lose
console.log(checkWinner2([0])); // lose
console.log(checkWinner2([0, 2])); // lose

console.log("\n");

function checkWinner3(data) {
  let result = false;
  win.map((e) => {
    const [a, b, c] = e;
    if (data[a] && data[a] === data[b] && data[a] === data[c]) {
      result = true;
    }
  });
  if (result) {
    return "win";
  }
  return "lose";
}

console.log(checkWinner3(["X", "O", "X", "O", "X", "O", "X", "O", "X"])); // win - X,X,X
console.log(checkWinner3(["X", "O", "X", "O", "O", "O", "X", "O", "X"])); // win - O,O,O
console.log(checkWinner3(["X", "O", "X", "X", "O", "X", "X", "O", "X"])); // win - X,X,X
console.log(checkWinner3(["X", "O", "X", "O", "O", "X", "X", "X", "O"])); // lose
