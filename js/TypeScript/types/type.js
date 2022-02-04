"use strict";
// String
var nome = 'Felipe';
// nome = 28;
console.log(nome);
//Numbers
var idade = 24;
// idade = '27.5';
console.log(idade);
//Boolean
var haveHobbies = false;
// haveHobbies = 1;
console.log(haveHobbies);
// Explicit types
var myAge;
myAge = 27;
console.log(typeof myAge);
myAge = 'My years old is 27';
console.log(typeof myAge);
//Array
var hobbies = ['Cozen', 'Making a coffe'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//Tuples
var address = ['Av Principal', 99, 'Bloco C'];
console.log(address);
//Enums
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
console.log(Color);
//Any Type
var car = 'Porsche';
console.log(car);
car = { mark: 'BWM', year: 2019 };
console.log(car);
// Functions
function returnMyName() {
    return nome;
}
function saysHello() {
    console.log('Hello!');
}
function multiple(a, b) {
    return a * b;
}
console.log(returnMyName());
saysHello();
console.log(multiple(2, 2.8));
// Function type
var people;
people = saysHello;
people();
var calc = multiple;
console.log(calc(3, 3));
// Objects
var user = {
    name: 'Felipe',
    age: 24,
};
console.log(user);
var employee = {
    managers: ['Ana', 'Fernando'],
    hitPoint: function (hour) {
        if (hour <= 8)
            return 'normal pointer';
        return 'excedded pointer';
    }
};
console.log(employee.hitPoint(9));
// Aliases Types
function hitPoint(hour) {
    if (hour <= 8) {
        return 'Normal Pointer';
    }
    return 'Excedded Pointer';
}
var employee2 = {
    managers: ['José', 'Conde'],
    hitPoint: hitPoint
};
var employee3 = {
    managers: ['Wagner', 'Ramalho'],
    hitPoint: hitPoint
};
console.log(employee2.hitPoint(10));
console.log(employee3.hitPoint(5));
// Union types
var note = 10;
console.log("my note is " + note);
note = '10';
console.log("my note is " + note);
// Never
function error(msg) {
    throw new Error(msg);
}
var product = {
    name: 'Sabão',
    price: 10,
    validateProduct: function () {
        if (!this.name || this.name.trim().length === 0) {
            error('Name is necessary');
        }
        if (this.price <= 0) {
            error('Price invalid!');
        }
    }
};
product.validateProduct();
// Null
var height = 12;
// height = null;
var opcionalHeight = 12;
opcionalHeight = null;
var contact1 = {
    name: 'Felipe',
    phone1: '81 998030671',
    phone2: null,
};
