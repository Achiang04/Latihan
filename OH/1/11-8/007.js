/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
-------------- 
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

function arrayMerge(firstData, secondData) {
  // Code here
  let temp = firstData;
  for (let i = 0; i < secondData.length; i++) {
    let counter = 0;
    for (let j = 0; j < firstData.length; j++) {
      if (secondData[i] === firstData[j]) {
        counter++;
      }
    }
    if (counter === 0) {
      temp.push(secondData[i]);
    }
  }
  return temp;
}

// Test cases

console.log(
  arrayMerge(["king", "devil jin", "akuma"], ["eddie", "steve", "geese"])
);
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(["sergei", "jin"], ["jin", "steve", "bryan"]));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(
  arrayMerge(
    ["alisa", "yoshimitsu"],
    ["devil jin", "yoshimitsu", "alisa", "law"]
  )
);
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ["devil jin", "sergei"]));
// ['devil jin', 'sergei']

console.log(arrayMerge(["hwoarang"], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []
