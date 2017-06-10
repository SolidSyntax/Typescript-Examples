// Simple generic

// Without generics
function echo(data: any) {
    return data;
}

console.log(echo("Hello").length); // Ide does not know that echo returned a string
console.log(echo(12) + 10); // or a number
console.log(echo({name: "Jake"}).length);  // This will be undefined

// With generics
function genericEcho<T>(data: T){ // Accept an argument of type T
    return data;
}
console.log(genericEcho("Hello").length); // A string has a length
console.log(genericEcho(12) + 10); // a number can be added
//console.log(genericEcho({name: "Jake"}).length);  // This will not compile, an object does not have a length
console.log(genericEcho<number>(12) + 10); // Type can be specified explicitly


// Built-in generics
const numberValues: Array<number> = [1, 3.5, 6];
numberValues.push(4);
//numberValues.push("Four"); // Wrong type

// Arrays of generic types
function printAll<T>(args: T[]){ // Accept an argument which is an array of type T
    args.forEach((value) => console.log(value));
}
printAll<string>(["green", "yellow", "blue"]);

// Generic types
// genericEchoType is a constant which holds a function (genericEcho)
// where the input is of type T and the return value is of type T
const genericEchoType: <T>(data: T) => T = genericEcho;
console.log(genericEchoType("Hello"));


// generic classes

// without generics
class SimpleMath {
    private baseValue: any;
    private multiplyValue: any

    constructor(baseValue: any, multiplyValue: any) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate(){
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath(10, 3);
console.log(simpleMath.calculate());

const simpleMathWithString = new SimpleMath("", 3); // No compile error
console.log(simpleMathWithString.calculate()); // runtime error, a string is not a number


// with generics
class GenericMath<T> {
    private baseValue: T;
    private multiplyValue: T;

    constructor(baseValue: T, multiplyValue: T) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate(): number{
        return +this.baseValue * +this.multiplyValue; // + is an explicit cast to a number
    }
}

const genericMath = new GenericMath(10, 3);
console.log(genericMath.calculate());

// const genericMathWithStringAndNumber = new GenericMath("", 3); // Compiler error, types are not the same
const genericMathWithString = new GenericMath("One", "Two"); // No compiler error, types are the same
console.log(genericMathWithString.calculate()); // runtime error, a string is not a number


// with generic constraints
class GenericConstraintsMath<T extends number | string> { // the argument given for type T must extend a number or a string
    private baseValue: T;
    private multiplyValue: T;

    constructor(baseValue: T, multiplyValue: T) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate(): number{
        return +this.baseValue * +this.multiplyValue; // + is an explicit cast to a number
    }
}

const genericConstraintsMath = new GenericConstraintsMath(10, 3);
console.log(genericConstraintsMath.calculate());

const genericConstraintsMathWithString = new GenericConstraintsMath("10", "3");
console.log(genericConstraintsMathWithString.calculate());
// const genericConstraintsMathWithObject = new GenericConstraintsMath({value: "10"}, 3); // Compiler error, object does not extend string or number


// with multiple generics
class MultipleGenericsMath<T extends number | string,U extends number | string> { // the argument given for type T and U must extend a number or a string
    private baseValue: T;
    private multiplyValue: U;

    constructor(baseValue: T, multiplyValue: U) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate(): number{
        return +this.baseValue * +this.multiplyValue; // + is an explicit cast to a number
    }
}

const multipleGenericsMath = new MultipleGenericsMath(10, 3);
console.log(multipleGenericsMath.calculate());

const multipleGenericsMixedMath = new MultipleGenericsMath(10, "3"); // T and U can be of a different type
console.log(multipleGenericsMixedMath.calculate());
