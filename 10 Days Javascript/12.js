function Polygon(array) {
  this.perimeter = function () {
    let hasil = 0;
    for (let i = 0; i < array.length; i++) {
      hasil += array[i];
    }
    return hasil;
  };
}

const rectangle = new Polygon([10, 20, 10, 20]); //60
const square = new Polygon([10, 10, 10, 10]); // 40
const pentagon = new Polygon([10, 20, 30, 40, 43]); // 143

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
