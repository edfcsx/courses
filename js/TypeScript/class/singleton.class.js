"use strict";
// Diferença entre static e singleton
// A maior diferença e que a implementação de herança no static não é tão facil quanto no single
// no singleton se pode usar conceitos de herança mais facilmente
var Unique = /** @class */ (function () {
    function Unique() {
    }
    Unique.getInstance = function () {
        return Unique.instance;
    };
    Unique.prototype.now = function () {
        return new Date;
    };
    Unique.instance = new Unique;
    return Unique;
}());
console.log(Unique.getInstance().now());
