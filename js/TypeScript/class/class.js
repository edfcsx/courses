"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    function Data(day, month, year) {
        if (day === void 0) { day = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1994; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return Data;
}());
var brithDay = new Data(5, 9, 1994);
console.log(brithDay.day);
var DataX = /** @class */ (function () {
    function DataX(dia, month, year) {
        if (dia === void 0) { dia = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1970; }
        this.dia = dia;
        this.month = month;
        this.year = year;
    }
    return DataX;
}());
var Car = /** @class */ (function () {
    function Car(brand, model, maximumSpeed) {
        var _this = this;
        if (maximumSpeed === void 0) { maximumSpeed = 200; }
        this.brand = brand;
        this.model = model;
        this.maximumSpeed = maximumSpeed;
        this.currentSpeed = 0;
        this.changeSpeed = function (delta) {
            var newSpeed = _this.currentSpeed + delta;
            var validateSpeed = newSpeed >= 0 && newSpeed <= _this.maximumSpeed;
            if (validateSpeed) {
                _this.currentSpeed = newSpeed;
            }
            else {
                _this.currentSpeed = delta > 0 ? _this.maximumSpeed : 0;
            }
        };
        this.speedUp = function () { return _this.changeSpeed(5); };
        this.break = function () { return _this.changeSpeed(-5); };
        this.showSpeed = function () { return "Car: " + _this.model + " - " + _this.brand + ", Speed is " + _this.currentSpeed + " Km/h"; };
    }
    return Car;
}());
var audiCar = new Car('Audi', 'TT');
for (var i = 100; i > 0; i--) {
    var random = (Math.random() * 100);
    if (random <= 50) {
        audiCar.break();
    }
    else {
        audiCar.speedUp();
    }
}
console.log(audiCar.showSpeed());
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(model, maximumSpeed) {
        var _this = _super.call(this, 'Ferrari', model, maximumSpeed) || this;
        _this.speedUp = function () { return _this.changeSpeed(20); };
        _this.break = function () { return _this.changeSpeed(-15); };
        return _this;
    }
    return Ferrari;
}(Car));
var ferrari = new Ferrari('F40', 324);
for (var i = 100; i > 0; i--) {
    var random = (Math.random() * 100);
    if (random <= 30) {
        ferrari.break();
    }
    else {
        ferrari.speedUp();
    }
}
console.log(ferrari.showSpeed());
// Getters and Setters
var People = /** @class */ (function () {
    function People() {
        this._age = 0;
    }
    Object.defineProperty(People.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value >= 0 && value <= 120) {
                this._age = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var peopleX = new People;
peopleX.age = 12;
console.log(peopleX);
peopleX.age = -15;
console.log(peopleX);
// Static Attributes and Methods
var Mathematic = /** @class */ (function () {
    function Mathematic() {
    }
    Mathematic.circArea = function (radius) {
        return Mathematic.PI * radius * radius;
    };
    Mathematic.PI = 3.1416;
    return Mathematic;
}());
console.log(Mathematic.circArea(4));
// Readonly attributes
var Airplane = /** @class */ (function () {
    function Airplane(model, prefix) {
        this.model = model;
        this.prefix = prefix;
    }
    return Airplane;
}());
var airplane = new Airplane('Super Tucano', 'Tucan');
// airplane.model = ''
console.log(airplane);
