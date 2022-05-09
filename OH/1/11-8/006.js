/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']
- input: []
  output: []


ATURAN CODING:
-------------- 
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
*/

function reverseAll(arr) {
  // Code here
  let data = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let nama = "";
    for (let j = arr[i].length - 1; j >= 0; j--) {
      nama += arr[i][j];
    }
    data.push(nama);
  }
  return data;
}

console.log(reverseAll(["dimitri", "sergei", "alexei"]));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(["kira", "lawliet", "near", "mello"]));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
