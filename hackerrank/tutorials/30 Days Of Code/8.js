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

// processDataArray([
//   3,
//   "sam 99912222",
//   "tom 11122222",
//   "harry 12299933",
//   "sam",
//   "edward",
//   "harry",
// ]);

function processDataString(input) {
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

// console.log("-----------------------------------------");
// processDataString(
//   "3 sam 99912222 tom 11122222 harry 12299933 sam edward harry"
// );

function processDataEnter(input) {
  //Enter your code here
  let data = input.split("\n");
  let n = parseInt(data[0]);
  let resultNumber = n + 1;

  let book = data.slice(1, resultNumber);
  let contact = data.slice(resultNumber, data.length);

  for (let i = 0; i < n; i++) {
    let temp = book[i].split(" ");
    temp[0] === contact[i]
      ? console.log(`${contact[i]}=${temp[1]}`)
      : console.log("Not found");
  }
}

// console.log("-----------------------------------------");
// processDataEnter(
//   "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry"
// );

function processData(input) {
  input = input.split("\n");
  console.log(input);
  let phoneBook = [];

  for (i = 1; i <= parseInt(input[0]); i++) {
    var contactArray = input[i].split(" ");
    console.log(contactArray);
    phoneBook[contactArray[0]] = contactArray[1];
  }
  console.log(phoneBook);
  console.log(phoneBook["sam"]);

  for (i = parseInt(input[0]) + 1; i < input.length; i++) {
    console.log(phoneBook[input[i]]);
    if (phoneBook[input[i]]) {
      console.log(input[i] + "=" + phoneBook[input[i]]);
    } else {
      console.log("Not found");
    }
  }
}

processData(
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry"
);
