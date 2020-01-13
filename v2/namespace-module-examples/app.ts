/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>


// namespaces

namespace MyNamespaceMath {
    const PI = 3.14;

    export const calculateCircumference = (diameter: number): number => diameter * PI;
    export const calculateRectange = (width: number, length: number): number => width * length;
}
const PI = "A different PI";

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

import * as Circle from "./math/circle"; // Import all into Circle namespace
import calcAliasForDefaultExport from "./math/rectangle"; // Import default with an alias

console.log(Circle.calculateCircumference(10));
console.log(Circle.MODULE_PI);
console.log(calcAliasForDefaultExport(10,200));

