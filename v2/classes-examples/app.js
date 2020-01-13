// Create a class & methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = (function () {
    function Hero(name, nickName) {
        this.nickName = nickName;
        this.nrOfFriends = 4; // Accessible from subclasses
        this.name = name;
    }
    Hero.prototype.printNrOfFriends = function () {
        console.log(this.nrOfFriends);
    };
    Hero.prototype.setLair = function (lair) {
        this.lair = lair;
        console.log(lair);
    };
    return Hero;
}());
var flash = new Hero("The Flash", "Scarlet speedster");
console.log(flash);
console.log(flash.name);
flash.printNrOfFriends();
flash.setLair("The basement");
// Inheritance
var Batman = (function (_super) {
    __extends(Batman, _super);
    //name: string = "Batman";  // Can be overridden, also set in the constructor
    function Batman() {
        var _this = _super.call(this, "Batman", "The dark knight") || this;
        _this.nrOfFriends = 34;
        return _this;
        //this.lair = "Batcave"; // Private variables can't be accessed
    }
    return Batman;
}(Hero));
var batman = new Batman();
console.log(batman);
// getters & Setters
var Vehicle = (function () {
    function Vehicle() {
    }
    Object.defineProperty(Vehicle.prototype, "engine", {
        get: function () {
            return "Engine used: " + this._engine;
        },
        set: function (value) {
            if (value.length > 3) {
                this._engine = value;
            }
            else {
                this._engine = "Not available";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
}());
var vehicle = new Vehicle();
console.log(vehicle.engine);
vehicle.engine = "A";
console.log(vehicle.engine);
vehicle.engine = "Turbo charged";
console.log(vehicle.engine);
// Static properties & methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumreference = function (diameter) {
        return this.PI * diameter;
    };
    return Helpers;
}());
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumreference(8.9));
// Abstract classes
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.calcRealisticBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// const project = new Project(); //Can not be instantiated
var project = new ITProject();
console.log(project);
project.changeName("Big stuff");
console.log(project);
// private constructors
var Singleton = (function () {
    function Singleton(_count) {
        this._count = _count;
    }
    Object.defineProperty(Singleton.prototype, "count", {
        get: function () {
            this._count++;
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Singleton, "instance", {
        get: function () {
            if (!Singleton._instance) {
                Singleton._instance = new Singleton(0);
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Singleton;
}());
//const counter = new Singleton(0); // Can't be accessed
var counter = Singleton.instance;
console.log(counter.count);
console.log(Singleton.instance.count);
console.log(counter.count);
//# sourceMappingURL=app.js.map