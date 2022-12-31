/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");

const readableStream = fs.createReadStream("./input.txt", {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream("output2.txt");

readableStream.on("readable", (data) => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
    console.log(error.message);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
