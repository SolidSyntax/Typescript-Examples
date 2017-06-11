// Decorators
function constructorLogger(constructorFn: Function) {
    console.log(constructorFn)
}

@constructorLogger
class Hero {
    constructor() {
        console.log("Hero constructor");
    }
}


// Decorator factories
function noop() {
}
function conditionalLogging(shouldLog: boolean): Function {
    return shouldLog ? constructorLogger : noop;
}

@conditionalLogging(true)
class HeroWeapon {

}


// advanced
function superpower(constructorFn: Function) {
    constructorFn.prototype.superpower = function () {
        console.log("Using super power !");
    }
}

@constructorLogger   // Multiple decorators are possible
@superpower
class HeroWithSuperpower {
}

const heroWithSuperpower = new HeroWithSuperpower();
// heroWithSuperpower.superpower(); // Typescript does not recognize the superpower function, we have to cast...
// (<any>heroWithSuperpower).superpower(); // old style, conflicts with .jsx files
const castedHero = heroWithSuperpower as any;
castedHero.superpower();


// Method decorator
// property decorator

function editable(editable: boolean) { // Method decorator
    return function (target: any, propName: string, descripor: PropertyDescriptor) {
        descripor.writable = editable;
    }
}

function overwritable(overwritable: boolean) { // property decorator
    return function (target: any, propName: string): any { // property decorators can't access the existing PropertyDescriptor
        const newDescriptor: PropertyDescriptor = {  // They can set a new one !
            writable: overwritable
        };
        return newDescriptor;
    }
}

class MagicSpell {
    @overwritable(true) // If false the property will always be undefined
    spellName: string;

    constructor(spellName: string) {
        this.spellName = spellName;
    }

    @editable(false)
    castSpell() {
        console.log(`Casting the spell ${this.spellName}`);
    }
}

const fireball = new MagicSpell("Fireball");
fireball.castSpell();
fireball.spellName = "Magic Missile";
fireball.castSpell();
fireball.castSpell = function () { // cast spell can be reassigned if editable equals true, otherwise the reassign is ignored
    console.log("Disabled");
};
fireball.castSpell();

// Parameter decorator
function printInfo(target: any,methodName: string, paramIndex: number){
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class MagicItem {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    printItem(@printInfo displayValue: boolean) {
        if (displayValue) {
            console.log(`This is a ${this.name}, worth ${this.value} gold pieces`);
        } else {
            console.log(`This is a ${this.name}`);
        }
    }
}

const bagOfHolding = new MagicItem("Bag of Holding", 1000);
bagOfHolding.printItem(false);
bagOfHolding.printItem(true);
