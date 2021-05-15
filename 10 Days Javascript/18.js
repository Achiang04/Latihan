// function regexVar(s) {
//   /*
//    * Declare a RegExp object variable named 're'
//    * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
//    */
//   let vowel = ["a", "i", "u", "e", "o"];
//   let last = s.length - 1;
//   let re = false;
//   for (let i = 0; i < vowel.length; i++) {
//     if (s[0] === vowel[i]) {
//       if (s[0] === s[last]) {
//         re = true;
//       }
//     }
//   }

//   /*
//    * Do not remove the return statement
//    */
//   return re;
// }

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  // let re = new RegExp("a", "i", "u", "e", "o", "g");
  let re = /^([aiueo]).*\1$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

function main() {
  const re = regexVar();

  console.log(re.test("abcda"));
  console.log(re.test("abcdo"));
  console.log(re.test("abcd"));
  console.log(re.test("aewxyzae"));
}
main();
