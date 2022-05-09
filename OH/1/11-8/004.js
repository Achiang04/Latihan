// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @

contoh 3 (drawThreeColsBox(1)):
@

Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(num) {
  // your code here
  let count = 1;
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= num; j++) {
      if (count % 3 === 0) {
        line += "* ";
      } else if (count % 2 === 1) {
        line += "@ ";
      } else if (count % 2 === 0) {
        line += "$ ";
      }
      count++;
    }
    console.log(line);
  }
}

drawSymbolicColsBox(3);
console.log();
drawSymbolicColsBox(5);
console.log();
drawSymbolicColsBox(1);

console.log("==============================================================");

function drawSymbolicColsBox2(num) {
  // your code here
  let count = 1;
  let line = "";
  for (let i = 1; i <= num * num; i++) {
    if (count % 3 === 0) {
      line += "* ";
    } else if (count % 2 === 1) {
      line += "@ ";
    } else if (count % 2 === 0) {
      line += "$ ";
    }

    if (count % num === 0) {
      line += "\n";
    }

    count++;
  }

  return line;
}

console.log(drawSymbolicColsBox2(3));
console.log(drawSymbolicColsBox2(5));
console.log(drawSymbolicColsBox2(1));
