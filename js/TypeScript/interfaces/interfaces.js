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
function saysHello(people) {
    console.log("Hello!! " + people.name);
}
function changeName(people) {
    people.name = 'Joca';
}
var people1 = {
    name: 'José',
    age: 24,
    xyz: true,
    salute: function (secondName) {
        console.log("My name is " + this.name + " " + secondName);
    },
};
saysHello(people1);
people1.salute('Cipriano');
changeName(people1);
saysHello(people1);
// Use Class
var Client = /** @class */ (function () {
    function Client() {
        var _this = this;
        this.name = '';
        this.salute = function (secondName) { return console.log("My name is " + _this.name + " " + secondName); };
    }
    return Client;
}());
var clientOne = new Client();
clientOne.name = 'Han';
clientOne.salute('Solo');
var pow;
pow = function (base, exp) { return Math.pow(base, exp); };
console.log(pow(3, 3));
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    ;
    return RealA;
}());
var RealB = /** @class */ (function () {
    function RealB() {
    }
    RealB.prototype.a = function () { };
    ;
    RealB.prototype.b = function () { };
    ;
    return RealB;
}());
var RealC = /** @class */ (function () {
    function RealC() {
    }
    RealC.prototype.a = function () { };
    ;
    RealC.prototype.b = function () { };
    ;
    RealC.prototype.c = function () { };
    ;
    return RealC;
}());
function teste(b) {
}
var AbstractedABD = /** @class */ (function () {
    function AbstractedABD() {
    }
    AbstractedABD.prototype.a = function () { };
    ;
    AbstractedABD.prototype.b = function () { };
    ;
    return AbstractedABD;
}());
teste(new RealC);
Object.prototype.log = function () {
    console.log(this.toString());
};
var x = 2;
var y = 3;
var z = 4;
x.log();
y.log();
z.log();
var cli = {
    nome: 'Pedro',
    toString: function () {
        return this.nome;
    }
};
cli.log();
// Generics Array 
var evaluations = [10, 9.3, 7.7];
evaluations.push(8.4);
// evaluations.push('5.5'); 
console.log(evaluations);
function print(args) {
    args.forEach(function (element) { return console.log(element); });
}
print([1, 2, 3]);
print([4, 5]);
print(['Ana', 'Bia', 'Carlos']);
print([
    { name: 'Felipe', age: 24 },
    { name: 'Eduardo', age: 25 }
]);
print([
    { name: 'Felipe', age: 24 },
    { name: 'Eduardo', age: 25 }
]);
// class with generics
var BinaryOperation = /** @class */ (function () {
    function BinaryOperation(operation1, operation2) {
        this.operation1 = operation1;
        this.operation2 = operation2;
    }
    return BinaryOperation;
}());
// console.log(new BinaryOperation('Bom', 'Dia').execute());
// console.log(new BinaryOperation(2, 5).execute());
// console.log(new BinaryOperation('bom', 3).execute());
// console.log(new BinaryOperation({}, {}).execute());
var SumBinary = /** @class */ (function (_super) {
    __extends(SumBinary, _super);
    function SumBinary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumBinary.prototype.execute = function () {
        return this.operation1 + this.operation2;
    };
    return SumBinary;
}(BinaryOperation));
console.log(new SumBinary(3, 4).execute());
