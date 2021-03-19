function Person(initialAge) {
  this.age;

  if (initialAge < 0) {
    this.age = 0;
    console.log("Age is not valid, setting age to 0.");
  }
  this.age = initialAge;

  this.yearPasses = function () {
    this.age++;
  };

  this.amIOLD = function () {
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
}

const person1 = new Person(4);
person1.amIOLD();
const person2 = new Person(-1);
person2.amIOLD();
const person3 = new Person(10);
person3.amIOLD();
const person4 = new Person(16);
person4.amIOLD();
const person5 = new Person(18);
person5.amIOLD();
