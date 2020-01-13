"use strict";
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
// namespaces
var MyNamespaceMath;
(function (MyNamespaceMath) {
    var PI = 3.14;
    MyNamespaceMath.calculateCircumference = function (diameter) { return diameter * PI; };
    MyNamespaceMath.calculateRectange = function (width, length) { return width * length; };
})(MyNamespaceMath || (MyNamespaceMath = {}));
var PI = "A different PI";
console.log(MyNamespaceMath.calculateCircumference(10));
console.log(MyNamespaceMath.calculateRectange(10, 5));
console.log(PI);
/*** Imports
 * command line can bundle all files together:
 *   tsc --outFile app.js circleMath.ts rectangleMat.ts app.ts
 *
 *  Or we can use TS namespace-imports
 *  (see top of this file)
 *  This approach still needs a command line change:
 *  tsc --outFile app.js
 ***/
//import CircleMath = MyMath.Circle; // Namespace alias
//console.log(CircleMath.calculateCircumference(10));
//console.log(MyMath.calculateRectange(10, 5));
//console.log(PI);
// Modules, the preferred way
//import {MODULE_PI, calculateCircumference} from "./math/circle";
//import {calculateRectange} from "./math/rectangle";
var Circle = require("./math/circle"); // Import all into Circle namespace
var rectangle_1 = require("./math/rectangle"); // Import default with an alias
console.log(Circle.calculateCircumference(10));
console.log(Circle.MODULE_PI);
console.log(rectangle_1.default(10, 200));
//# sourceMappingURL=app.js.map