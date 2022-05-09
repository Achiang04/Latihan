/*
==================================
Array Mastery: Second Largest
==================================
Nama:________

[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built in function Math and .apply
*/

function secondLargest(angka) {
  // Code here
  let terbesar = angka[0];
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] > terbesar) {
      terbesar = angka[i];
    }
  }

  let keduaTerbesar = 0;
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] !== terbesar && angka[i] > keduaTerbesar) {
      keduaTerbesar = angka[i];
    }
  }

  return keduaTerbesar;
}

// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313

console.log(
  "==========================================================================="
);

function secondLargest2(angka) {
  // Code here
  angka.sort();
  return angka[angka.length - 2];
}

// TEST CASES
console.log(secondLargest2([5, 2, 1, 4])); // 4
console.log(secondLargest2([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest2([15, 32, 11, 14])); // 15
console.log(secondLargest2([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest2([123, 321, 143, 313])); // 313
