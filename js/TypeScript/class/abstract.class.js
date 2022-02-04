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
var Calc = /** @class */ (function () {
    function Calc() {
        this.result = 0;
    }
    Calc.prototype.showResult = function () {
        return this.result;
    };
    return Calc;
}());
var Sum = /** @class */ (function (_super) {
    __extends(Sum, _super);
    function Sum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sum.prototype.execute = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        this.result = numbers.reduce(function (t, a) { return t + a; });
    };
    return Sum;
}(Calc));
var Multiple = /** @class */ (function (_super) {
    __extends(Multiple, _super);
    function Multiple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiple.prototype.execute = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        this.result = numbers.reduce(function (t, a) { return t * a; });
    };
    return Multiple;
}(Calc));
var calc1 = new Sum();
calc1.execute(1, 5, 10, 8, 90);
console.log(calc1.showResult());
var calc2 = new Multiple();
calc2.execute(1.5, 9, 8.9);
console.log(calc2.showResult());
