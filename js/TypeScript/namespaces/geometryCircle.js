"use strict";
var Geometry;
(function (Geometry) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function circumference(radius) {
            return PI * Math.pow(radius, 2);
        }
        Area.circumference = circumference;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
