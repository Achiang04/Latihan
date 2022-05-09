/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

function csvToObject(keys, values) {
  // write your code here
  if (keys.length === 0 && values.length === 0) return {};

  let keysResult = [];
  let keysTemp = "";
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== ",") {
      keysTemp += keys[i];
    } else {
      keysResult.push(keysTemp);
      keysTemp = "";
    }
  }
  keysResult.push(keysTemp);

  let valuesResult = [];
  let valuesTemp = "";
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== ",") {
      valuesTemp += values[i];
    } else {
      valuesResult.push(valuesTemp);
      valuesTemp = "";
    }
  }
  valuesResult.push(valuesTemp);

  let result = {};
  for (let i = 0; i < keysResult.length; i++) {
    result[keysResult[i]] = valuesResult[i];
  }

  return result;
}

console.log(csvToObject("name,phoneNumber", "Dimitri,+666123654"));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(
  csvToObject("firstName,lastName,nationality", "Sergei,Dragunov,Russia")
);
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject("", ""));
// { }
