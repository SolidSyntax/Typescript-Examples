// Without explicit interface
const hero = {
    name: "Rincewind",
    profession: "wizard",
    spells: "none",
    companions: ["Twoflower, Hrun"],
    catchPhrase(){
        console.log("Let's get out of here!");
    }
};

const greet = (hero: {name: string}):void => {  // Hero should be an object with a name property
    console.log("Hello, " + hero.name);
};
greet(hero);


const warn = (hero: { name: string }): void => {
    console.log("Be warned, " + hero.name);
};
warn(hero);


// With interface
interface Hero{
    name: String;
    profession?:string; // optional argument
    //[propWithUnknownName: string]: any; // property with an unknown name and any type
    catchPhrase():void;
}



const greetNamed = (hero: Hero):void => {
    console.log("Hello, " + hero.name);
};
greetNamed(hero); // Works hero implicitly implements the interface
greetNamed({name: "Rincewind", catchPhrase(){}}); // Works, profession is optional
//greetNamed({name: "Rincewind", anything: "value"}); // Works, propWithUnknownName can be anything
//greetNamed({name: "Rincewind", profession: "wizard", anything: "value", spells:"none"});  // Special case, does not work for object literals. Strict checking


const warnNamed = (hero: Hero): void => {
    console.log("Be warned, " + hero.name);
};
warnNamed(hero);


// With classes
class Rincewind implements Hero{
    name: String = "Rincewind";
    powerLevel: number = 1;

    catchPhrase(): void {
        console.log("Let's get out of here!");
    }
}

const rincewind: Hero = new Rincewind();
greetNamed(rincewind);
greetNamed(rincewind);

// Interfaces and functions
interface DoubleValue {
    (number1: number, number2: number): number;
}

const doubler: DoubleValue = (number1: number, number2: number):number => (number1 + number2) *2;
// const stringDoubler: DoubleValue = (value1: string, value2: string):string => (number1 + number2);  // Wrong types
console.log(doubler(1, 2));

// Interface inheritance
interface HeroWithWeapon extends Hero{
    weapon: string;
}

const heroWithWeapon: HeroWithWeapon = {
    name: "Hrun",
    weapon: "sword",
    catchPhrase(){
        console.log("Smash!");
    }
};
greetNamed(heroWithWeapon);