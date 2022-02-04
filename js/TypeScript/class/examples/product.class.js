"use strict";
var Product = /** @class */ (function () {
    function Product(name, price, discount) {
        var _this = this;
        if (discount === void 0) { discount = 0; }
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.resume = function () {
            if (_this.discount > 0) {
                var price = _this.priceWithDescount();
                return "Product: " + _this.name + ", price is R$ " + _this.price + ", have a (" + _this.discount * 100 + "%) off, final price is " + price;
            }
            else {
                return "Product: " + _this.name + ", price is R$ " + _this.price;
            }
        };
        this.priceWithDescount = function () {
            return _this.price - (_this.price * _this.discount);
        };
    }
    return Product;
}());
var productX = new Product('Arroz', 5);
var productY = new Product('Salsicha', 10, 0.2);
console.log(productX.resume());
console.log(productY.resume());
