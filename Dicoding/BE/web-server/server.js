// console.log('Halo, kita akan belajar membuat server');

// cara jalankan
// npm run start

// ------------------------------------------------------------------------------------

// const http = require("http");

// const requestListener = (request, response) => {
//   response.setHeader("Content-Type", "text/html");

//   response.statusCode = 200;
//   response.end("<h1>Halo HTTP Server!</h1>");
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`Server berjalan pada http://${host}:${port}`);
// });

// cara jalankan
// 1. npm run start
// 2. curl -X GET http://localhost:5000/

// ------------------------------------------------------------------------------------

// const http = require("http");

// const requestListener = (request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.statusCode = 200;

//   const { method } = request;

//   if (method === "GET") {
//     response.end("<h1>Hello!</h1>");
//   }

//   if (method === "POST") {
//     response.end("<h1>Hai!</h1>");
//   }

//   if (method === "PUT") {
//     response.end("<h1>Bonjour!</h1>");
//   }

//   if (method === "DELETE") {
//     response.end("<h1>Salam!</h1>");
//   }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`Server berjalan pada http://${host}:${port}`);
// });

// cara jalankan
// 1. npm run start

// curl -X GET http://localhost:5000
// curl -X POST http://localhost:5000
// curl -X PUT http://localhost:5000
// curl -X DELETE http://localhost:5000

// ------------------------------------------------------------------------------------

// const http = require("http");

// const requestListener = (request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.statusCode = 200;

//   const { method } = request;

//   if (method === "GET") {
//     response.end("<h1>Hello!</h1>");
//   }

//   if (method === "POST") {
//     let body = [];

//     request.on("data", (chunk) => {
//       body.push(chunk);
//     });

//     request.on("end", () => {
//       body = Buffer.concat(body).toString();
//       const { name } = JSON.parse(body);
//       response.end(`<h1>Hai, ${name}!</h1>`);
//     });
//   }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`Server berjalan pada http://${host}:${port}`);
// });

// cara jalankan
// 1. npm run start
// 2. curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"

// ------------------------------------------------------------------------------------

const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.end("<h1>Ini adalah homepage</h1>");
    } else {
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end("<h1>Halo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } else {
      response.end(
        `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      );
    }
  } else {
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

/*
cara jalankan
1. npm run start

curl -X GET http://localhost:5000/home
// output: <h1>Halaman tidak ditemukan!</h1>
curl -X GET http://localhost:5000/hello
// output: <h1>Halaman tidak ditemukan!</h1>
curl -X GET http://localhost:5000/test
// output: <h1>Halaman tidak ditemukan!</h1>

curl -X GET http://localhost:5000
// output: <h1>Ini adalah homepage</h1>
curl -X POST http://localhost:5000
// output: <h1>Halaman tidak dapat diakses dengan POST request</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Halaman tidak dapat diakses dengan DELETE request</h1>

curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>
 */
