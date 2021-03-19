function getCount(objects) {
  let n = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      n++;
    }
  }
  return n;
}
console.log(
  getCount([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
  ])
); // 2
