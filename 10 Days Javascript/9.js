// function Rectangle(a, b) {
//   console.log(a);
//   console.log(b);
//   console.log(2 * (a + b));
//   console.log(a * b);
// }

function Rectangle(a, b) {
  this.length = a;

  this.width = b;

  this.perimeter = 2 * (a + b);

  this.area = a * b;
}

function main() {
  const rec = new Rectangle(4, 5);

  console.log(rec.length); //4
  console.log(rec.width); //5
  console.log(rec.perimeter); //18
  console.log(rec.area); //20
}

main();
