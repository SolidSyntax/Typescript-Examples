// let and const
console.log("Let and Const");
var globalScopeVariable = "globalScopeVariable"; // Should no longer be used

let blockScopeVariable = "blockScopeVariable";
blockScopeVariable = "Can be reassigned";
console.log(blockScopeVariable);

const constant = "constant";
// constant = "can not be changed";


// Block scope
function differendScope(){
    let blockScopeVariable = "differendVariable";
    console.log(blockScopeVariable);
}
differendScope();
console.log(blockScopeVariable);

// Arrow functions
console.log("Arrow functions");
const addNumbers = function (number1:number, number2:number):number { // Classic function

    return number1 + number2;
};
console.log(addNumbers(1,3));
const multiplyNumbers = (number1:number, number2:number): number => number1 * number2; // Arrow function

console.log(multiplyNumbers(4,3));
const greet = () => console.log("Hello ");

console.log(greet());

// Default parameters
console.log("Default parameters");

const countDown = (start: number = 3): void => {
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

const numbers = [1, 10, 99, -4];
console.log(Math.max(...numbers)); //With spread

function makeArray(request: string,...args: number[]){ //Rest operator
    console.log(`Making an array for: ${request}`);
    return args;
}
console.log(makeArray("My Numbers",1, 2, 3));

// Destructuring Arrays
console.log("Destructuring");
const heroes = ["Bruce", "Wade", "Rincewind"];

const bruce = heroes[0];//Without destructuring
console.log(bruce,heroes[1],heroes[2]);

const [bruce2,wade,rincewind] = heroes; //With destructuring
console.log(bruce2,wade,rincewind);

// Destructuring Objects
const heroData ={callName: "Rincewind", power: "wizard"}; //Without destructuring
const heroName = heroData.callName;
const heroPower = heroData.power;
console.log(heroName, heroPower);

const {callName:nameAlias, power} = heroData; //With destructuring
console.log(nameAlias, power);

//Template literal
console.log("Template literals");
const heroItem = "Staff";
const heroAction = "I'm using my " + heroItem + " like a true hero";   //Without literals
console.log(heroAction);

const fancyHeroAction = `And then....
    The hero used his ${heroItem}
    With great effect !`;
console.log(fancyHeroAction);

// There is more: Symbols, Iterators and generators





