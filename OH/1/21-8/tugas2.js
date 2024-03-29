// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
9 8 7 
6 5 4
3 2 1

 1 2 3 
 4 5 6 
 7 8 9 

contoh 2 (drawThreeColsBox(5)):
15 14 13
12 11 10
9 8 7
6 5 4
3 2 1

contoh 3 (drawThreeColsBox(1)):
3 2 1

Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawThreeColsBox(height) {
  // Code here
  let temp = "";
  let counter = 0;
  for (let i = height * 3; i > 0; i--) {
    if (counter === 3) {
      temp += "\n";
      counter = 0;
    }
    temp += `${i} `;
    counter++;
  }
  console.log(temp);
}

drawThreeColsBox(3);
console.log("\n");
drawThreeColsBox(5);
console.log("\n");
drawThreeColsBox(1);
