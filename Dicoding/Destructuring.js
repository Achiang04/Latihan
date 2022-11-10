const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui destructuring object
({ firstName, age } = profile);

console.log(firstName);
console.log(age);

/* output:
John
18
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/

let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a]; // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/
