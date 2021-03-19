function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  let re = /\d+/g;
  //   let re = new RegExp("\\d+", "g");
  //   let re = /([0-9])+/g;

  /*
   * Do not remove the return statement
   */
  return re;
}

function main() {
  const re = regexVar();

  console.log(re.test("102, 1948948 and 1.3 and 4.5"));
  // 102
  // 1948948
  // 1
  // 3
  // 4
  // 5
  console.log(re.test("1 2 3"));
  // 1
  // 2
  // 3
}
main();
