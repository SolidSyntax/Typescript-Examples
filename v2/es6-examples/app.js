// let and const
console.log("Let and Const");
var globalScopeVariable = "globalScopeVariable"; // Should no longer be used
var blockScopeVariable = "blockScopeVariable";
blockScopeVariable = "Can be reassigned";
console.log(blockScopeVariable);
var constant = "constant";
// constant = "can not be changed";
// Block scope
function differendScope() {
    var blockScopeVariable = "differendVariable";
    console.log(blockScopeVariable);
}
differendScope();
console.log(blockScopeVariable);
// Arrow functions
console.log("Arrow functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(1, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; }; // Arrow function
console.log(multiplyNumbers(4, 3));
var greet = function () { return console.log("Hello "); };
console.log(greet());
// Default parameters
console.log("Default parameters");
var countDown = function (start) {
    if (start === void 0) { start = 3; }
    console.log("Start: ", start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown(10);
countDown();
// Rest & Spread operator
console.log("Rest & Spread");
console.log(Math.max(1, 10, 99, -4)); //Without spread
var numbers = [1, 10, 99, -4];
console.log(Math.max.apply(Math, numbers)); //With spread
function makeArray(request) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("Making an array for: " + request);
    return args;
}
console.log(makeArray("My Numbers", 1, 2, 3));
// Destructuring Arrays
console.log("Destructuring");
var heroes = ["Bruce", "Wade", "Rincewind"];
var bruce = heroes[0]; //Without destructuring
console.log(bruce, heroes[1], heroes[2]);
var bruce2 = heroes[0], wade = heroes[1], rincewind = heroes[2]; //With destructuring
console.log(bruce2, wade, rincewind);
// Destructuring Objects
var heroData = { callName: "Rincewind", power: "wizard" }; //Without destructuring
var heroName = heroData.callName;
var heroPower = heroData.power;
console.log(heroName, heroPower);
var nameAlias = heroData.callName, power = heroData.power; //With destructuring
console.log(nameAlias, power);
//Template literal
console.log("Template literals");
var heroItem = "Staff";
var heroAction = "I'm using my " + heroItem + " like a true hero"; //Without literals
console.log(heroAction);
var fancyHeroAction = "And then....\n    The hero used his " + heroItem + "\n    With great effect !";
console.log(fancyHeroAction);
// There is more: Symbols, Iterators and generators
//# sourceMappingURL=app.js.map