// cara 1
class Mail {
  constructor() {
    this.from = "pengirim@dicoding.com";
    this.contacts = [];
    this.yourOtherProperty = "the values";
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
  }
}

// cara 2
function Mail() {
  this.from = "pengirim@dicoding.com";
  this.contacts = [];
  this.yourOtherPrototype = "the values";
}

Mail.prototype.sendMessage = function (msg, to) {
  console.log(`you send: ${msg} to  ${to} from ${this.from}`);
  this.contacts.push(to); // menyimpan kontak baru
};

// Object composition
// [1] list of abstractions
const canSendMessage = (self) => ({
  sendMessage: () => console.log("send message:", self.message),
});

const checkIsValidPhone = (self) => ({
  isValid: () => console.log("valid phone", self.from),
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store,
  };
  // [4] method
  const personalEnterpriseBehaviors = (self) => ({
    createCatalog: () => console.log("Catalog has created: ", self.store),
  });

  // [5] create object composition
  return Object.assign(
    self,
    personalEnterpriseBehaviors(self),
    canSendMessage(self),
    checkIsValidPhone(self)
  );
};

const pe1 = personalEnterprise(
  "pengirim@gmail.com",
  "hei produk baru nih",
  "Dicoding Store"
);
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih

// kuis
class Animal {
  name = String;
  age = Number;
  isMammal = Boolean;

  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);
