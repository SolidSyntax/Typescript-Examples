// Exercise 1 - How was your TypeScript Class?
/*
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
*/
class Car{
    private _acceleration : number = 0;

    constructor(private name: string) {
    }

    public honk(){
        console.log(this.name + " :Toooooooooot!");
    }

    get acceleration(): number {
        return this._acceleration;
    }

    accelerate(speed: number):void{
        this._acceleration += speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2 - Two objects, based on each other ...
/*
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
*/
class Shape{
    public readonly width: number;
    public readonly length: number;


    constructor(width: number,length:number) {
        this.width = width;
        this.length = length;
    }
}

class Rectangle extends Shape{
    constructor(width: number, length: number) {
        super(width, length);
    }

    calcSize():number {
        return this.width * this.length;
    };
}

const rectangle = new Rectangle(5, 2);
console.log("Rectangle size: " +rectangle.calcSize());


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
/*
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
*/

class Person{
    private _firstName: string = "";

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}

const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);