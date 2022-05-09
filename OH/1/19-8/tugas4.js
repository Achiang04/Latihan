// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
  // Code here
  for (let i = 1; i <= row; i++) {
    let temp = "";
    for (let j = 1; j <= row; j++) {
      if (j % 2 === 0) {
        temp += "o";
      } else {
        temp += "x";
      }

      if (i === j) {
        console.log(temp);
        temp = "";
      }
    }
  }
}

drawLadder(6);
console.log("\n");
drawLadder(3);
