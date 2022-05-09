/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage(input) {
  // Code here
  let bintang = 0;
  let pagar = 0;
  let anchor = 0;
  let dollar = 0;
  let temp = [];

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "*":
        bintang++;
        break;
      case "#":
        pagar++;
        break;
      case "@":
        anchor++;
        break;
      case "$":
        dollar++;
        break;
    }
  }

  if (bintang !== 0) {
    temp.push(`${(bintang / input.length) * 100}% *`);
  }
  if (pagar !== 0) {
    temp.push(`${(pagar / input.length) * 100}% #`);
  }
  if (anchor !== 0) {
    temp.push(`${(anchor / input.length) * 100}% @`);
  }
  if (dollar !== 0) {
    temp.push(`${(dollar / input.length) * 100}% $`);
  }

  let result = "";
  for (let i = 0; i < temp.length; i++) {
    if (i === temp.length - 1) {
      result += temp[i];
    } else {
      result += `${temp[i]}, `;
    }
  }

  return result;
}

console.log(virusPercentage("**#*##")); // 50% *, 50% #
console.log(virusPercentage("**######")); // 75% #, 25% *
console.log(virusPercentage("**##@")); // 40% *, 40% #, 20% @
console.log(virusPercentage("@")); // 100% @
console.log(virusPercentage("#$*@")); // 25% #, 25% $, 25% *, 25% @
