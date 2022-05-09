/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function addTitle(people) {
  // Code here
  if (!people.length) return "No Data";

  let temp = "";
  for (let i = 0; i < people.length; i++) {
    if (people[i][1] === "male") {
      temp += `Mr. ${people[i][0]}`;
    } else {
      if (people[i][2]) {
        temp += `Mrs. ${people[i][0]}`;
      } else {
        temp += `Ms. ${people[i][0]}`;
      }
    }

    if (i !== people.length - 1) {
      temp += ", ";
    }
  }

  return temp;
}

console.log(
  addTitle([
    ["Sergei", "male", true],
    ["Alyona", "female", false],
  ])
); // Mr. Sergei, Ms. Alyona

console.log(
  addTitle([
    ["Dimitri", "male", false],
    ["Anastasia", "female", false],
    ["Vladlena", "female", true],
  ])
); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data
