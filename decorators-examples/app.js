var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators
function constructorLogger(constructorFn) {
    console.log(constructorFn);
}
var Hero = (function () {
    function Hero() {
        console.log("Hero constructor");
    }
    return Hero;
}());
Hero = __decorate([
    constructorLogger
], Hero);
// Decorator factories
function noop() {
}
function conditionalLogging(shouldLog) {
    return shouldLog ? constructorLogger : noop;
}
var HeroWeapon = (function () {
    function HeroWeapon() {
    }
    return HeroWeapon;
}());
HeroWeapon = __decorate([
    conditionalLogging(true)
], HeroWeapon);
// advanced
function superpower(constructorFn) {
    constructorFn.prototype.superpower = function () {
        console.log("Using super power !");
    };
}
var HeroWithSuperpower = (function () {
    function HeroWithSuperpower() {
    }
    return HeroWithSuperpower;
}());
HeroWithSuperpower = __decorate([
    constructorLogger // Multiple decorators are possible
    ,
    superpower
], HeroWithSuperpower);
var heroWithSuperpower = new HeroWithSuperpower();
// heroWithSuperpower.superpower(); // Typescript does not recognize the superpower function, we have to cast...
// (<any>heroWithSuperpower).superpower(); // old style, conflicts with .jsx files
var castedHero = heroWithSuperpower;
castedHero.superpower();
// Method decorator
// property decorator
function editable(editable) {
    return function (target, propName, descripor) {
        descripor.writable = editable;
    };
}
function overwritable(overwritable) {
    return function (target, propName) {
        var newDescriptor = {
            writable: overwritable
        };
        return newDescriptor;
    };
}
var MagicSpell = (function () {
    function MagicSpell(spellName) {
        this.spellName = spellName;
    }
    MagicSpell.prototype.castSpell = function () {
        console.log("Casting the spell " + this.spellName);
    };
    return MagicSpell;
}());
__decorate([
    overwritable(true) // If false the property will always be undefined
], MagicSpell.prototype, "spellName", void 0);
__decorate([
    editable(false)
], MagicSpell.prototype, "castSpell", null);
var fireball = new MagicSpell("Fireball");
fireball.castSpell();
fireball.spellName = "Magic Missile";
fireball.castSpell();
fireball.castSpell = function () {
    console.log("Disabled");
};
fireball.castSpell();
// Parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var MagicItem = (function () {
    function MagicItem(name, value) {
        this.name = name;
        this.value = value;
    }
    MagicItem.prototype.printItem = function (displayValue) {
        if (displayValue) {
            console.log("This is a " + this.name + ", worth " + this.value + " gold pieces");
        }
        else {
            console.log("This is a " + this.name);
        }
    };
    return MagicItem;
}());
__decorate([
    __param(0, printInfo)
], MagicItem.prototype, "printItem", null);
var bagOfHolding = new MagicItem("Bag of Holding", 1000);
bagOfHolding.printItem(false);
bagOfHolding.printItem(true);
//# sourceMappingURL=app.js.map