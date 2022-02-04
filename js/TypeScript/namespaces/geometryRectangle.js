"use strict";
var Geometry;
(function (Geometry) {
    var Area;
    (function (Area) {
        function rectangle(base, height) {
            return base * height;
        }
        Area.rectangle = rectangle;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
