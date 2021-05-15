function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a":
    case "i":
    case "u":
    case "e":
    case "o":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
  }
  return letter;
}
console.log(getLetter("adfgt")); // A
