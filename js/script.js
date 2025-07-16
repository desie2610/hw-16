// const Account = function({ login, email }) {
//   this.login = login;   
//   this.email = email;   
// };

// Account.prototype.getInfo = function () {
//   console.log(`Ваш емаіл ${this.email} Ваш логін ${this.login}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Ваш емаіл mango@dog.woof Ваш логін Mangozedog

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Ваш емаіл poly@mail.com Ваш логін Poly


// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo();

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// class StringBuilder {
//   constructor(initialValue) {
//     this._value = initialValue;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value += str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

class Car {
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours;
    }
  }

  // Цей метод замість static: просто викликається через об'єкт
  getSpecs() {
    console.log(`maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`);
  }
}

// Перевірка:
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

mustang.getSpecs();
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

mustang.getSpecs();
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000