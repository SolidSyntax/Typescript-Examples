// Implicit types
//string
let myName = "Hans";
//myName = 15; //not possible, types do not match


//number
let myAge = 33;
myAge = 33.5;
// myAge = "a string"; //Wrong type


//boolean
let allive = true;
//allive = 1; //Not a boolean


//Assign types
let myAgeSomeTimeLater; // implicit type 'any'
myAgeSomeTimeLater = 40;
myAgeSomeTimeLater = "older";

let aFixedType: number;
aFixedType = 10;
//aFixedType = "10"; // invalid type

// array
let heroes = ["Iron man" , "Bruce" , "Rik"];
console.log(heroes[0]);
console.log(typeof heroes);

//heroes = [2]; //invalid type
let everythingIsAHero: any[] = ["Iron man" , "Bruce" , "Rik"];
everythingIsAHero = [2];


// tuples
let address: [string,number] = ["street", 234];
//address = [234,"street"]; //invalid

// enum
enum Power {
    Fireball,
    MagicMissile,
    SearingLight = 50 //Specific value (optional)
}

let myPower: Power = Power.Fireball;

// any
let car: any = "BMW";
car = {brand:"BMW", series: 1};


// functions
function returnMyPower():Power{
    //return "Fireball"; invalid
    return myPower;
}

function usePower(power:Power):void{
    console.log(`Power ${power} used`);
}

usePower(Power.MagicMissile);

// function types
let myPowerUser: (power:Power)=> void = usePower;


//Objects
let userData = {
    name: "Jeff",
    age: 45
};

//userData = {};//Not assignable to implicit type

userData = {
    age: 55, //Order of properties may change. Names may not
    name: "Jeff"
};

let explicitUserData:{name:string,age:number} = {
    name: "Jeff",
    age: 45
};

//Type alias
type Complex = {data: number[], output:(all:Boolean) => number[]};

// Complex object
let complex:Complex = {
    data: [1,2,3],
    output: function (all:Boolean): number[]{
        return this.data;
    }
};

// union types
let myFlexiblePower:Power|string;
myFlexiblePower = Power.SearingLight;
myFlexiblePower = "BigKaboem";

// check types
let finalValue = "A String";
if(typeof  finalValue =="string"){
    console.log("Final value is a string");
}

// never (a function which never returned, not even a void)
function neverReturns():never {
    throw new Error('An error!')
}

//Nullable types
let canNotBeNull: number = 13;
//canBeNull = null; //Invalid type, strictNullChecks enabled in tsconfig

let canBeNull:number|null = 12;
canBeNull = null;



