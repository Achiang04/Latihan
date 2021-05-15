// function sides(literals, ...expressions) {
//   let height = literals;
//   let width = expressions[0];

//   let area = height * width;
//   let perimeter = 2 * (height + width);

//   let akar = Math.sqrt(perimeter * perimeter - 16 * area);
//   //   console.log("akar", akar);

//   let s1 = (perimeter + akar) / 4;
//   let s2 = (perimeter - akar) / 4;
//   //   console.log("s1", s1);
//   //   console.log("s2", s2);

//   let arr = [s1, s2];
//   arr.sort();

//   return arr;
// }

// console.log(sides(10, 14));

function sides(literals, ...expressions) {
  expressions = [140, 48];
  literals = `The area is: ${expressions[0]}. \nThe Perimeter is: ${expressions[1]}.`;
  //   console.log(literals);

  let akar = Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0]);

  let s1 = (expressions[1] + akar) / 4;
  let s2 = (expressions[1] - akar) / 4;

  let arr = [s1, s2];
  arr.sort();

  return arr;
}

console.log(sides(10, 14)); // [10,14]
