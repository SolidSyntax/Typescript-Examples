// Implicit types
//string
var myName = "Hans";
//myName = 15; //not possible, types do not match
//number
var myAge = 33;
myAge = 33.5;
// myAge = "a string"; //Wrong type
//boolean
var allive = true;
//allive = 1; //Not a boolean
//Assign types
var myAgeSomeTimeLater; // implicit type 'any'
myAgeSomeTimeLater = 40;
myAgeSomeTimeLater = "older";
var aFixedType;
aFixedType = 10;
//aFixedType = "10"; // invalid type
// array
var heroes = ["Iron man", "Bruce", "Rik"];
console.log(heroes[0]);
console.log(typeof heroes);
//heroes = [2]; //invalid type
var everythingIsAHero = ["Iron man", "Bruce", "Rik"];
everythingIsAHero = [2];
// tuples
var address = ["street", 234];
//address = [234,"street"]; //invalid
// enum
var Power;
(function (Power) {
    Power[Power["Fireball"] = 0] = "Fireball";
    Power[Power["MagicMissile"] = 1] = "MagicMissile";
    Power[Power["SearingLight"] = 50] = "SearingLight"; //Specific value (optional)
})(Power || (Power = {}));
var myPower = Power.Fireball;
// any
var car = "BMW";
car = { brand: "BMW", series: 1 };
// functions
function returnMyPower() {
    //return "Fireball"; invalid
    return myPower;
}
function usePower(power) {
    console.log("Power " + power + " used");
}
usePower(Power.MagicMissile);
// function types
var myPowerUser = usePower;
//Objects
var userData = {
    name: "Jeff",
    age: 45
};
//userData = {};//Not assignable to implicit type
userData = {
    age: 55,
    name: "Jeff"
};
var explicitUserData = {
    name: "Jeff",
    age: 45
};
// Complex object
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// union types
var myFlexiblePower;
myFlexiblePower = Power.SearingLight;
myFlexiblePower = "BigKaboem";
// check types
var finalValue = "A String";
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
// never (a function which never returned, not even a void)
function neverReturns() {
    throw new Error('An error!');
}
//Nullable types
var canNotBeNull = 13;
//canBeNull = null; //Invalid type, strictNullChecks enabled in tsconfig
var canBeNull = 12;
canBeNull = null;
