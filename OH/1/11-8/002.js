/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'daniel', output: 'Masuk group pertama'
- `name` = 'immelda', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'

*/

function namaHuruf(nama) {
  // code here
  switch (nama[0]) {
    case "a":
    case "b":
    case "c":
    case "d":
      return "Masuk group pertama";
    case "e":
    case "f":
    case "g":
    case "h":
      return "Masuk group kedua";
    default:
      return "Masuk group terakhir";
  }
}

console.log(namaHuruf("asep"));
console.log(namaHuruf("hacummm"));
console.log(namaHuruf("ucup"));
