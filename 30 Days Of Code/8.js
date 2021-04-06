function processDataArray(input) {
  //Enter your code here
  let n = input[0];
  let book = input.slice(1, 1 + n);
  let contact = input.slice(1 + n, input.length);

  for (let i = 0; i < n; i++) {
    let temp = book[i].split(" ");
    temp[0] === contact[i]
      ? console.log(`${contact[i]}=${temp[1]}`)
      : console.log("Not found");
  }
}

processDataArray([
  3,
  "sam 99912222",
  "tom 11122222",
  "harry 12299933",
  "sam",
  "edward",
  "harry",
]);

function processData(input) {
  //Enter your code here
  let data = input.split(" ");
  let n = data[0];
  let book = data.slice(1, 2 * n + 1);
  let contact = data.slice(2 * n + 1, input.length);

  let bookName = [];
  let bookNumber = [];
  for (let i = 0; i < book.length; i++) {
    i % 2 === 0 ? bookName.push(book[i]) : bookNumber.push(book[i]);
  }

  for (let i = 0; i < contact.length; i++) {
    bookName[i] === contact[i]
      ? console.log(`${contact[i]}=${bookNumber[i]}`)
      : console.log("Not found");
  }
}
console.log("-----------------------------------------");
processData("3 sam 99912222 tom 11122222 harry 12299933 sam edward harry");
