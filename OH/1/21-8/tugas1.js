/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

function buatKotak(height) {
  // Code here
  for (let i = 1; i <= height; i++) {
    let temp = "";
    for (let j = 1; j <= height; j++) {
      if (i % 2 === 0) {
        temp += "#";
      } else {
        temp += "*";
      }
    }
    console.log(temp);
  }
}

buatKotak(5);
console.log("\n");
buatKotak(3);

console.log("\n");

function buatKotak1(height) {
  // Code here
  let counter = 1;
  let temp = "";
  for (let i = 1; i <= height * height; i++) {
    if (counter % 2 === 0) {
      temp += "#";
    } else {
      temp += "*";
    }

    if (i % height === 0) {
      counter++;
      temp += "\n";
    }
  }
  console.log(temp);
}

buatKotak1(5);
console.log("\n");
buatKotak1(3);
