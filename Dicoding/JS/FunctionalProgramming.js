// impure function
const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */

// rubah jadi pure function
const createPersonWithAge2 = (age, person) => {
  return { ...person, age };
};

const person2 = {
  name: "Bobo",
};

const newPerson2 = createPersonWithAge2(18, person2);

console.log({
  person2,
  newPerson2,
});

/**
 * Output:
 *  {
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */
