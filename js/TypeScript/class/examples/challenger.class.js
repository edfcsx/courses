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
// Exercício 1 - Classe
var Moto = /** @class */ (function () {
    function Moto(nome, speed) {
        var _this = this;
        if (speed === void 0) { speed = 0; }
        this.nome = nome;
        this.speed = speed;
        this.honk = function () { return "Toooot"; };
        this.speedUp = function (value) { return _this.speed += value; };
    }
    return Moto;
}());
var moto1 = new Moto('Honda Biz');
moto1.speedUp(10);
console.log(moto1.honk());
// Exercício 2 - Herança
var object2D = /** @class */ (function () {
    function object2D(base, height) {
        if (base === void 0) { base = 0; }
        if (height === void 0) { height = 0; }
        this.base = base;
        this.height = height;
    }
    return object2D;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.area = function () { return _this.base * _this.height; };
        return _this;
    }
    return Rectangle;
}(object2D));
var rec = new Rectangle(4, 3);
console.log(rec.area());
// Exercício 3 - Getters & Setters
var Trainee = /** @class */ (function () {
    function Trainee(_firstname) {
        if (_firstname === void 0) { _firstname = ''; }
        this._firstname = _firstname;
    }
    Object.defineProperty(Trainee.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstname = name;
            }
            else {
                this.firstname = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Trainee;
}());
var trainee1 = new Trainee;
trainee1.firstname = 'Joca';
console.log(trainee1.firstname);
