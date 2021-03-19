function vowelsAndConsonants(s) {
  let sisa = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "i" ||
      s[i] === "u" ||
      s[i] === "e" ||
      s[i] === "o"
    ) {
      console.log(s[i]);
    } else {
      sisa.push(s[i]);
    }
  }

  sisa.forEach((e) => console.log(e));
}

vowelsAndConsonants([
  "j",
  "a",
  "v",
  "a",
  "s",
  "c",
  "r",
  "i",
  "p",
  "t",
  "l",
  "o",
  "o",
  "p",
  "s",
]);

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
