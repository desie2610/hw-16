const Account = function({ login, email }) {
  this.login = login;   
  this.email = email;   
};

Account.prototype.getInfo = function () {
  console.log(`Ваш емаіл ${this.email} Ваш логін ${this.login}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Ваш емаіл mango@dog.woof Ваш логін Mangozedog

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Ваш емаіл poly@mail.com Ваш логін Poly


class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

const mangos = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo();

const polys = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
class Car {
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = price;
  }
}



const myCar = new Car({ maxSpeed: 180, price: 25000 });

console.log(myCar);
// Виведе: Car { maxSpeed: 180, speed: 0, isOn: false, distance: 0, price: 25000 }