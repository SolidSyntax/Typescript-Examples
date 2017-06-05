// Create a class & methods

class Hero {
    name: string;  // Default is public
    private lair: string;
    protected nrOfFriends: number = 4;   // Accessible from subclasses

    constructor(name: string,
                public nickName: string) { // Automatically create a public property
        this.name = name;
    }

    printNrOfFriends() {  // Can also be private, public or protected
        console.log(this.nrOfFriends)
    }


    setLair(lair: string) {
        this.lair = lair;
        console.log(lair)
    }


}

const flash = new Hero("The Flash", "Scarlet speedster");
console.log(flash);
console.log(flash.name);
flash.printNrOfFriends();
flash.setLair("The basement");

// Inheritance
class Batman extends Hero {
    //name: string = "Batman";  // Can be overridden, also set in the constructor

    constructor() {
        super("Batman", "The dark knight");
        this.nrOfFriends = 34;
        //this.lair = "Batcave"; // Private variables can't be accessed
    }
}

const batman = new Batman();
console.log(batman);

// getters & Setters
class Vehicle {
    private _engine: string;


    get engine(): string {
        return "Engine used: " + this._engine;
    }

    set engine(value: string) {
        if (value.length > 3) {
            this._engine = value;
        } else {
            this._engine = "Not available";
        }

    }
}

const vehicle = new Vehicle();
console.log(vehicle.engine);
vehicle.engine = "A";
console.log(vehicle.engine);
vehicle.engine = "Turbo charged";
console.log(vehicle.engine);


// Static properties & methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumreference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumreference(8.9));

// Abstract classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 0;

    calcRealisticBudget() {
        return this.budget * 2;
    }

    abstract changeName(name: string): void;
}

class ITProject extends Project {

    changeName(name: string): void {
        this.projectName = name;
    }

}

// const project = new Project(); //Can not be instantiated
const project = new ITProject();
console.log(project);
project.changeName("Big stuff");
console.log(project);

// private constructors
class Singleton {
    private static _instance: Singleton;

    private constructor(private _count: number) { // private property shortcut
    }

    public get count(): number {
        this._count++;
        return this._count;
    }

    static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton(0);
        }

        return this._instance;
    }
}

//const counter = new Singleton(0); // Can't be accessed
const counter = Singleton.instance;
console.log(counter.count);
console.log(Singleton.instance.count);
console.log(counter.count);