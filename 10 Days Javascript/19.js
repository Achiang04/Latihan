function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  let re = new RegExp("^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$");
  /*
   * Do not remove the return statement
   */
  return re;
}
function main() {
  const re = regexVar();

  console.log(re.test("Mr.X"));
  console.log(re.test("Mrs.Y"));
  console.log(re.test("Dr#Joseph"));
  console.log(re.test("Er .Abc"));
}
main();
