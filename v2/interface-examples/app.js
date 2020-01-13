// Without explicit interface
var hero = {
    name: "Rincewind",
    profession: "wizard",
    spells: "none",
    companions: ["Twoflower, Hrun"],
    catchPhrase: function () {
        console.log("Let's get out of here!");
    }
};
var greet = function (hero) {
    console.log("Hello, " + hero.name);
};
greet(hero);
var warn = function (hero) {
    console.log("Be warned, " + hero.name);
};
warn(hero);
var greetNamed = function (hero) {
    console.log("Hello, " + hero.name);
};
greetNamed(hero); // Works hero implicitly implements the interface
greetNamed({ name: "Rincewind", catchPhrase: function () { } }); // Works, profession is optional
//greetNamed({name: "Rincewind", anything: "value"}); // Works, propWithUnknownName can be anything
//greetNamed({name: "Rincewind", profession: "wizard", anything: "value", spells:"none"});  // Special case, does not work for object literals. Strict checking
var warnNamed = function (hero) {
    console.log("Be warned, " + hero.name);
};
warnNamed(hero);
// With classes
var Rincewind = (function () {
    function Rincewind() {
        this.name = "Rincewind";
        this.powerLevel = 1;
    }
    Rincewind.prototype.catchPhrase = function () {
        console.log("Let's get out of here!");
    };
    return Rincewind;
}());
var rincewind = new Rincewind();
greetNamed(rincewind);
greetNamed(rincewind);
var doubler = function (number1, number2) { return (number1 + number2) * 2; };
// const stringDoubler: DoubleValue = (value1: string, value2: string):string => (number1 + number2);  // Wrong types
console.log(doubler(1, 2));
var heroWithWeapon = {
    name: "Hrun",
    weapon: "sword",
    catchPhrase: function () {
        console.log("Smash!");
    }
};
greetNamed(heroWithWeapon);
//# sourceMappingURL=app.js.map