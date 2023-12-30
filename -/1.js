var x = 1;
function check(x) {
  x = x + x;
  return x;
}

// console.log(check(1));
// console.log(x)

const a = ["asd", "dsa"];
const b = ["dsa", "asd"];

// console.log(a == b)
// console.log(a === b)

const c = {
  red: 1,
  green: 1,
};

const d = {
  red: 2,
  green: 1,
};

const result = c.red >= d.red && c.green >= d.green;
console.log(result);

const e = ["red", "green", "red"];

const temp = {};
const result2 = e.forEach(function (e) {
  if (temp[e]) {
    temp[e]++;
  } else {
    temp[e] = 1;
  }
});
console.log(temp);
