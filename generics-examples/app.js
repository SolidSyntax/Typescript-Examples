// Simple generic
// Without generics
function echo(data) {
    return data;
}
console.log(echo("Hello").length); // Ide does not know that echo returned a string
console.log(echo(12) + 10); // or a number
console.log(echo({ name: "Jake" }).length); // This will be undefined
// With generics
function genericEcho(data) {
    return data;
}
console.log(genericEcho("Hello").length); // A string has a length
console.log(genericEcho(12) + 10); // a number can be added
//console.log(genericEcho({name: "Jake"}).length);  // This will not compile, an object does not have a length
console.log(genericEcho(12) + 10); // Type can be specified explicitly
// Built-in generics
var numberValues = [1, 3.5, 6];
numberValues.push(4);
//numberValues.push("Four"); // Wrong type
// Arrays of generic types
function printAll(args) {
    args.forEach(function (value) { return console.log(value); });
}
printAll(["green", "yellow", "blue"]);
// Generic types
// genericEchoType is a constant which holds a function (genericEcho)
// where the input is of type T and the return value is of type T
var genericEchoType = genericEcho;
console.log(genericEchoType("Hello"));
// generic classes
// without generics
var SimpleMath = (function () {
    function SimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath(10, 3);
console.log(simpleMath.calculate());
var simpleMathWithString = new SimpleMath("", 3); // No compile error
console.log(simpleMathWithString.calculate()); // runtime error, a string is not a number
// with generics
var GenericMath = (function () {
    function GenericMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    GenericMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // + is an explicit cast to a number
    };
    return GenericMath;
}());
var genericMath = new GenericMath(10, 3);
console.log(genericMath.calculate());
// const genericMathWithStringAndNumber = new GenericMath("", 3); // Compiler error, types are not the same
var genericMathWithString = new GenericMath("One", "Two"); // No compiler error, types are the same
console.log(genericMathWithString.calculate()); // runtime error, a string is not a number
// with generic constraints
var GenericConstraintsMath = (function () {
    function GenericConstraintsMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    GenericConstraintsMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // + is an explicit cast to a number
    };
    return GenericConstraintsMath;
}());
var genericConstraintsMath = new GenericConstraintsMath(10, 3);
console.log(genericConstraintsMath.calculate());
var genericConstraintsMathWithString = new GenericConstraintsMath("10", "3");
console.log(genericConstraintsMathWithString.calculate());
// const genericConstraintsMathWithObject = new GenericConstraintsMath({value: "10"}, 3); // Compiler error, object does not extend string or number
// with multiple generics
var MultipleGenericsMath = (function () {
    function MultipleGenericsMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    MultipleGenericsMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // + is an explicit cast to a number
    };
    return MultipleGenericsMath;
}());
var multipleGenericsMath = new MultipleGenericsMath(10, 3);
console.log(multipleGenericsMath.calculate());
var multipleGenericsMixedMath = new MultipleGenericsMath(10, "3"); // T and U can be of a different type
console.log(multipleGenericsMixedMath.calculate());
//# sourceMappingURL=app.js.map