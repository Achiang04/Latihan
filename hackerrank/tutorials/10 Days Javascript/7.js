function reverseString(s) {
  try {
    // let temp1 = s.split("");
    // let temp2 = temp1.reverse();
    // let temp3 = temp2.join("");
    // console.log(temp3);
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString("1234");
// 4321
// s.split is not a function
reverseString(1234);
// 1234
