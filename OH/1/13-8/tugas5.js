/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

function dronePosition(grid) {
  // Code here
  let positionI = 0;
  let positionJ = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "*") {
        positionI = i;
        positionJ = j;
      }
    }
  }
  if (positionI === 0 && positionJ === 0) return "No drone";
  return `${positionI}, ${positionJ}`;
}

console.log(
  dronePosition([
    ["", "", ""],
    ["", "", ""],
    ["", "", "*"],
  ])
); // 2, 2

console.log(
  dronePosition([
    ["", "", ""],
    ["", "*", ""],
    ["", "", ""],
  ])
); // 1, 1

console.log(
  dronePosition([
    ["", "", "*"],
    ["", "", ""],
    ["", "", ""],
  ])
); // 0, 2

console.log(
  dronePosition([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])
); // No drone
