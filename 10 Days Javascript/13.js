class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  // cara biasa nambahin method dalam class
  //   area = function () {
  //     return this.w * this.h;
  //   };
}

// cara nambahin method dari luar class nya
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(s) {
    super();
    this.w = s;
    this.h = s;
  }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area()); //12
console.log(sqr.area()); //9
