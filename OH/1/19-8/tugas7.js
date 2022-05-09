/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
  // Code here
  let result = "";
  for (let i = 0; i < fishes.length; i++) {
    let temp = "";
    for (let j = 0; j < fishes[i].length; j++) {
      if (fishes[i][j] !== " ") {
        temp += fishes[i][j];
      } else {
        break;
      }
    }

    if (temp === "ikan") {
      result += fishes[i];

      if (i !== fishes.length - 1) {
        result += ", ";
      }
    }
    if (result !== "" && i === fishes.length - 2) {
      result += "dan ";
    }
  }

  if (result === "") return "tidak ada data";
  return result;
}

// TEST CASES
console.log(
  fishFilter(["ikan indosiar", "gurita", "cumi-cumi", "ikan bandeng"])
); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(["gurita", "ikan kerapu", "ikan hiu"])); // ikan kerapu, dan Ikan hiu
console.log(
  fishFilter([
    "bintang laut",
    "spongebob",
    "patrick",
    "ikan paus",
    "ikan hiu",
    "ikan tongkol",
  ])
); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(["gurita", "udang"])); // tidak ada data
